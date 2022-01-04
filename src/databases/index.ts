import { Database } from '@nozbe/watermelondb';
import  SQLiteAdapter  from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schema';
import { User } from './models/User';
import { Car } from './models/Car';

// Tabelas do banco para o SQLite
const adapter = new SQLiteAdapter({
    schema: schemas
});

export const database = new Database({
    adapter, 
    modelClasses: [
        User,
        Car
    ],
});