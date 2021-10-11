import { MigrationInterface, QueryRunner } from 'typeorm';

export class StudetsTest1633952530192 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE students (
        student_id  INT NOT NULL  PRIMARY KEY,
        student_name CHAR(100),
        student_age INT
    );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE students;`);
  }
}
