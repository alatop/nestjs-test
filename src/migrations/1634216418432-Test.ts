import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1634216418432 implements MigrationInterface {
  name = 'Test1634216418432';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "students" ("student_id" SERIAL NOT NULL, "student_name" character varying(100) NOT NULL, "student_age" integer NOT NULL, CONSTRAINT "PK_ba36f3e3743f80d1cdc51020103" PRIMARY KEY ("student_id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "students"`);
  }
}
