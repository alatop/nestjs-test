import { MigrationInterface, QueryRunner } from 'typeorm';

export class StudetsTest1634028529814 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE students (
            student_id  BIGSERIAL,
            student_name CHAR(100),
            student_age INT
        );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE students;`);
  }
}
