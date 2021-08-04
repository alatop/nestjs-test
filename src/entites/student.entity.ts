import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Student {
  @PrimaryGeneratedColumn()
  public stident_id: number;

  @Column()
  public student_name: string;

  @Column()
  public student_age: string;
}

export default Student;
