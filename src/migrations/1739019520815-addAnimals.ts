import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAnimals1739019520815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO animal (name, type) 
            VALUES
                ('Kobakhidze', 'pig'),
                ('Mdinaradze', 'horse'),
                ('Gomelauri', 'dog'),
                ('Tsilosani', 'hen'),
                ('Kaladze', 'donkey'),
                ('Kavelashvili', 'pigeon')
            ON CONFLICT DO NOTHING
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM animal
        `);
    }

}
