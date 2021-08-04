import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'students', synchronize: false })
class Student {
  @PrimaryGeneratedColumn()
  public student_id: number;

  @Column()
  public student_name: string;

  @Column()
  public student_age: string;
}

export default Student;
