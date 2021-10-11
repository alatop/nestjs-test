import { Repository, EntityRepository } from 'typeorm';
import Student from './student.entity';

@EntityRepository(Student)
export class StudentsRepository extends Repository<Student> {}
