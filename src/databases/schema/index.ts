import { appSchema } from '@nozbe/watermelondb';

import { userSchema } from './userSchema';
import { carSchema } from './carSchema';

//Centralização das tabelas para usar em toda a aplicação quando precisar
const schemas = appSchema({
    version: 2,
    tables: [
        userSchema,
        carSchema
    ]
});

export { schemas }