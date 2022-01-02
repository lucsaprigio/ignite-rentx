import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from 'react';

import { api } from '../services/api';
import { database } from '../databases';
import { User as ModelUser } from '../databases/models/User';

/* Dados que vem do banco */
interface User {
    id: string;
    user_id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
    token: string;
}

/* Dados que precisam para fazer o login no app */
interface SignInCredentials {
    email: string;
    password: string;
}

/* Compartilhando esses dados com a aplicação */
interface AuthContextData {
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>; 
    signOut: () => Promise<void>;
    updatedUser: (user: User) => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

/* 
    Essa variável armazena nosso contextoe os dados do usuário
    que vai em qualquer lugar da aplicação.
*/
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/* Essa função vai ficar por fora das rotas, recebendo um filho que serão as rotas */
function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<User>({} as User);

    async function signIn({ email, password }: SignInCredentials){  
    try {
        const response = await api.post('/sessions', {
            email,
            password
        });

        const { token, user } = response.data;
        api.defaults.headers.authorization = `Bearer ${token}`;

        const userCollection = database.get<ModelUser>('users');
        await database.write(async () => {
            await userCollection.create(( newUser ) => {
                newUser.user_id,
                newUser.name = user.name,
                newUser.email = user.email,
                newUser.driver_license = user.driver_license,
                newUser.avatar = user.avatar,
                newUser.token = token
            })
        })

        setData({ ...user, token });

    } catch(error) {
        throw new Error(error);
    }
}

    async function signOut() {
        try{
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                const userSelected = await userCollection.find(data.id);
                await userSelected.destroyPermanently();
            });

            setData({} as User);
        } catch(error) {
            throw new Error(error);
        }
    }

    async function updatedUser(user: User) {
        try {
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                const userSellected = await userCollection.find(user.id);
                await userSellected.update(( userData ) => {
                    userData.name = user.name,
                    userData.driver_license = user.driver_license,
                    userData.avatar = user.avatar
                });
            });
        } catch(error) {
            throw new Error(error)
        }

        setData(user);
    }
    // Obtendo os dados do usuário
    useEffect(() => {
        async function loadUserData() {
            const userCollection = database.get<ModelUser>('users');
            const response = await userCollection.query().fetch();
            
            if(response.length > 0){
                const userData = response[0]._raw as unknown as User;
                api.defaults.headers.authorization = `Bearer ${userData.token}`;
                setData(userData);
            }
        }

        loadUserData()
    })
    // Nosso contexto que vai compartilhar as info com todas as rotas
    return (
        <AuthContext.Provider
            value={{
                user: data,
                signIn,
                signOut,
                updatedUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

/* Devolve a os Dados de usuário e a função de signIn */
function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };