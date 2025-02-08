import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Pig } from '../entities/pig.entity';
import {DataSource} from "typeorm";

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'pig',
    password: 'bidzina',
    database: 'animal_farm',
    entities: [Pig],
    synchronize: true,
    logging: true,
    migrations: ['dist/migrations/*.ts'],
    migrationsTableName: 'migrations',
};

export default new DataSource({
    ...databaseConfig,
    migrations: ['src/migrations/*.ts'],
} as any);