import { appSchema } from '@nozbe/watermelondb';

import { userSchema } from './userSchema';

//Centralização das tabelas para usar em toda a aplicação quando precisar
const schemas = appSchema({
    version: 1,
    tables: [
        userSchema
    ]
});

export { schemas }