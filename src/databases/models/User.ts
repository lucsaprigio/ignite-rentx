import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class User extends Model {
    static table = 'users' // Relação do Modelo com a tabela do banco

    @field('user_id') // Nome do campo na tabela
    user_id!: string; // nome que vamos usar no modelo

    @field('name')
    name!: string;

    @field('email')
    email!: string;

    @field('driver_license')
    driver_license!: string;

    @field('avatar')
    avatar!: string;

    @field('token')
    token!: string;
}

export { User }