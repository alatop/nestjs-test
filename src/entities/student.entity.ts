import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'students' })
class Student {
  @PrimaryGeneratedColumn()
  public student_id: number;

  @Column({ length: 100 })
  public student_name: string;

  @Column({ type: 'int' })
  public student_age: string;
}

export default Student;
