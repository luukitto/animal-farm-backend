import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPig1739016256184 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO pig (name, status) 
            VALUES ('Animal Farm Pig', 'default')
            ON CONFLICT DO NOTHING
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM pig WHERE name = 'Animal Farm Pig'
        `);
    }
}