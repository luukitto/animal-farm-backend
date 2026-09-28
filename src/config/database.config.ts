import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Pig } from '../entities/pig.entity';
import { DataSource } from "typeorm";
import { Animal } from "../entities/animal.entity";

// Load variables from a local .env file when present (Node 20.12+).
try {
    (process as any).loadEnvFile?.();
} catch {
    // No .env file: rely on the shell environment.
}

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 5432),
    username: process.env.DB_USER ?? 'animal_farm',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ?? 'animal_farm',
    entities: [Pig, Animal],
    synchronize: true,
    logging: true,
    migrations: ['dist/migrations/*.ts'],
    migrationsTableName: 'migrations',
};

export default new DataSource({
    ...databaseConfig,
    migrations: ['src/migrations/*.ts'],
} as any);