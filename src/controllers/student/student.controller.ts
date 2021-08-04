import { Controller, Get } from '@nestjs/common';
import Student from 'src/entites/student.entity';
import { PostgreService } from 'src/servicies/postgre/postgre.service';
import { StudentService } from 'src/servicies/student/student.service';

@Controller('student')
export class StudentController {
  constructor(
    private studentsService: StudentService,
    private postgreService: PostgreService,
  ) {}

  @Get()
  async getAll(): Promise<Student[]> {
    return this.studentsService.getAll();
  }

  @Get('pg')
  async getAllPg(): Promise<Student[]> {
    return this.postgreService.executeQuery('SELECT * from students LIMIT 1');
  }

  @Get('demo')
  async getAllDemo(): Promise<any[]> {
    return this.postgreService.executeQuery(
      'SELECT * from `MODEL_LOOKBACK` LIMIT 5;',
    );
  }
}
