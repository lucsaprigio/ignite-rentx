import { tableSchema } from '@nozbe/watermelondb';

const userSchema = tableSchema({
    name: 'users', // Nome da Tabela
    columns: [ // Colunas da Tabela
        {
            name: 'user_id', // Nome dos campos dentro da tabela
            type: 'string' // Tipo que será atribuido no campo
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'driver_license',
            type: 'string'
        },
        {
            name: 'avatar',
            type: 'string'
        },
        {
            name: 'token',
            type: 'string'
        }
    ]
})

export { userSchema }