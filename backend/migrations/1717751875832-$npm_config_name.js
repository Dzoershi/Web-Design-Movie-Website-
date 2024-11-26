import typeorm from "typeorm";

const { MigrationInterface, QueryRunner } = typeorm;

export default class  $npmConfigName1717751875832 {
    name = ' $npmConfigName1717751875832'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "temporary_user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar,
                "firstname" varchar,
                "lastname" varchar,
                "categoriesId" integer,
                "recommend" varchar,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "FK_322e879a56b589cebf2c1cd26c3" FOREIGN KEY ("categoriesId") REFERENCES "rating" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_user"(
                    "id",
                    "email",
                    "firstname",
                    "lastname",
                    "categoriesId"
                )
            SELECT "id",
                "email",
                "firstname",
                "lastname",
                "categoriesId"
            FROM "user"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_user"
                RENAME TO "user"
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME TO "temporary_user"
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar,
                "firstname" varchar,
                "lastname" varchar,
                "categoriesId" integer,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "FK_322e879a56b589cebf2c1cd26c3" FOREIGN KEY ("categoriesId") REFERENCES "rating" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "user"(
                    "id",
                    "email",
                    "firstname",
                    "lastname",
                    "categoriesId"
                )
            SELECT "id",
                "email",
                "firstname",
                "lastname",
                "categoriesId"
            FROM "temporary_user"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_user"
        `);
    }
}
