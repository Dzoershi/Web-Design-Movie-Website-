import typeorm from "typeorm";

const { MigrationInterface, QueryRunner } = typeorm;

export default class  $npmConfigName1717677277075 {
    name = ' $npmConfigName1717677277075'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "rating" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "score" integer
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_movie" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "titre" varchar NOT NULL,
                "date_de_sortie" varchar NOT NULL,
                "description" varchar,
                "genre" varchar,
                "realisateur" varchar,
                "note" varchar,
                "duree" varchar,
                "categoriesId" integer,
                CONSTRAINT "UQ_2a90cdb9b8c90252b8ac89c664d" UNIQUE ("titre")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_movie"("id", "titre", "date_de_sortie", "description")
            SELECT "id",
                "titre",
                "date_de_sortie",
                "description"
            FROM "movie"
        `);
        await queryRunner.query(`
            DROP TABLE "movie"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_movie"
                RENAME TO "movie"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar NOT NULL,
                "firstname" varchar NOT NULL,
                "lastname" varchar NOT NULL,
                "categoriesId" integer,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_user"("id", "email", "firstname", "lastname")
            SELECT "id",
                "email",
                "firstname",
                "lastname"
            FROM "user"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_user"
                RENAME TO "user"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_movie" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "titre" varchar,
                "date_de_sortie" varchar,
                "description" varchar,
                "genre" varchar,
                "realisateur" varchar,
                "note" varchar,
                "duree" varchar,
                "categoriesId" integer,
                CONSTRAINT "UQ_2a90cdb9b8c90252b8ac89c664d" UNIQUE ("titre")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_movie"(
                    "id",
                    "titre",
                    "date_de_sortie",
                    "description",
                    "genre",
                    "realisateur",
                    "note",
                    "duree",
                    "categoriesId"
                )
            SELECT "id",
                "titre",
                "date_de_sortie",
                "description",
                "genre",
                "realisateur",
                "note",
                "duree",
                "categoriesId"
            FROM "movie"
        `);
        await queryRunner.query(`
            DROP TABLE "movie"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_movie"
                RENAME TO "movie"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar,
                "firstname" varchar,
                "lastname" varchar,
                "categoriesId" integer,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")
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
        await queryRunner.query(`
            CREATE TABLE "temporary_movie" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "titre" varchar,
                "date_de_sortie" varchar,
                "description" varchar,
                "genre" varchar,
                "realisateur" varchar,
                "note" varchar,
                "duree" varchar,
                "categoriesId" integer,
                CONSTRAINT "UQ_2a90cdb9b8c90252b8ac89c664d" UNIQUE ("titre"),
                CONSTRAINT "FK_1a3a30bbfb1d15135f023e2e99f" FOREIGN KEY ("categoriesId") REFERENCES "rating" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_movie"(
                    "id",
                    "titre",
                    "date_de_sortie",
                    "description",
                    "genre",
                    "realisateur",
                    "note",
                    "duree",
                    "categoriesId"
                )
            SELECT "id",
                "titre",
                "date_de_sortie",
                "description",
                "genre",
                "realisateur",
                "note",
                "duree",
                "categoriesId"
            FROM "movie"
        `);
        await queryRunner.query(`
            DROP TABLE "movie"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_movie"
                RENAME TO "movie"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_user" (
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
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")
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
        await queryRunner.query(`
            ALTER TABLE "movie"
                RENAME TO "temporary_movie"
        `);
        await queryRunner.query(`
            CREATE TABLE "movie" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "titre" varchar,
                "date_de_sortie" varchar,
                "description" varchar,
                "genre" varchar,
                "realisateur" varchar,
                "note" varchar,
                "duree" varchar,
                "categoriesId" integer,
                CONSTRAINT "UQ_2a90cdb9b8c90252b8ac89c664d" UNIQUE ("titre")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "movie"(
                    "id",
                    "titre",
                    "date_de_sortie",
                    "description",
                    "genre",
                    "realisateur",
                    "note",
                    "duree",
                    "categoriesId"
                )
            SELECT "id",
                "titre",
                "date_de_sortie",
                "description",
                "genre",
                "realisateur",
                "note",
                "duree",
                "categoriesId"
            FROM "temporary_movie"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_movie"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME TO "temporary_user"
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar NOT NULL,
                "firstname" varchar NOT NULL,
                "lastname" varchar NOT NULL,
                "categoriesId" integer,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")
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
        await queryRunner.query(`
            ALTER TABLE "movie"
                RENAME TO "temporary_movie"
        `);
        await queryRunner.query(`
            CREATE TABLE "movie" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "titre" varchar NOT NULL,
                "date_de_sortie" varchar NOT NULL,
                "description" varchar,
                "genre" varchar,
                "realisateur" varchar,
                "note" varchar,
                "duree" varchar,
                "categoriesId" integer,
                CONSTRAINT "UQ_2a90cdb9b8c90252b8ac89c664d" UNIQUE ("titre")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "movie"(
                    "id",
                    "titre",
                    "date_de_sortie",
                    "description",
                    "genre",
                    "realisateur",
                    "note",
                    "duree",
                    "categoriesId"
                )
            SELECT "id",
                "titre",
                "date_de_sortie",
                "description",
                "genre",
                "realisateur",
                "note",
                "duree",
                "categoriesId"
            FROM "temporary_movie"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_movie"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
                RENAME TO "temporary_user"
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "email" varchar NOT NULL,
                "firstname" varchar NOT NULL,
                "lastname" varchar NOT NULL,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "user"("id", "email", "firstname", "lastname")
            SELECT "id",
                "email",
                "firstname",
                "lastname"
            FROM "temporary_user"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_user"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
                RENAME TO "temporary_movie"
        `);
        await queryRunner.query(`
            CREATE TABLE "movie" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "titre" varchar NOT NULL,
                "date_de_sortie" varchar NOT NULL,
                "description" varchar,
                CONSTRAINT "UQ_2a90cdb9b8c90252b8ac89c664d" UNIQUE ("titre")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "movie"("id", "titre", "date_de_sortie", "description")
            SELECT "id",
                "titre",
                "date_de_sortie",
                "description"
            FROM "temporary_movie"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_movie"
        `);
        await queryRunner.query(`
            DROP TABLE "rating"
        `);
    }
}
