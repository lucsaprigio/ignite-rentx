import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
} from 'react';

import { api } from '../services/api';

/* Dados que vem do banco */
interface User {
    id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
}

/* Estado de Autenticação  */
interface AuthState {
    token: string;
    user: User; // Tipando com os dados acima.
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
    const [data, setData] = useState<AuthState>({} as AuthState);

    async function signIn({ email, password }: SignInCredentials){
        const response = await api.post('/sessions', {
            email,
            password
        });

        const { token, user } = response.data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user });
    }
    // Nosso contexto que vai compartilhar as info com todas as rotas
    return (
        <AuthContext.Provider
            value={{
                user: data.user,
                signIn
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