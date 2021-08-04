import { Controller, Get } from '@nestjs/common';
import Student from 'src/entites/student.entity';
import { StudentService } from 'src/servicies/student/student.service';

@Controller('student')
export class StudentController {
  constructor(private studentsService: StudentService) {}

  @Get()
  async getAll(): Promise<Student[]> {
    return this.studentsService.getAll();
  }
}
