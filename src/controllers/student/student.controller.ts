import { Controller, Get } from '@nestjs/common';
import { StudentService } from 'src/servicies/student/student.service';

@Controller('student')
export class StudentController {
  constructor(private studentsService: StudentService) {}

  @Get()
  getAll(): string {
    this.studentsService.getAll().then((result) => {
      return JSON.stringify(result);
    });

    return 'no data';
  }
}
