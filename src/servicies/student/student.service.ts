import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Student from 'src/entities/student.entity';
import { StudentsRepository } from 'src/entities/student.repoitory';

@Injectable()
export class StudentService {
  @InjectRepository(StudentsRepository)
  private studentRepository: StudentsRepository;

  async getAll(): Promise<Student[]> {
    const items = await this.studentRepository.find();
    if (items) {
      return items;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }
}
