import { Controller, Get } from '@nestjs/common';
import Student from 'src/entities/student.entity';
import { PostgreService } from 'src/servicies/postgre/postgre.service';
import { StudentService } from 'src/servicies/student/student.service';

@Controller('purepg')
export class PurepgController {
  constructor(
    private studentsService: StudentService,
    private postgreService: PostgreService,
  ) {}

  @Get('pg')
  async getAllPg(): Promise<Student[]> {
    return this.postgreService.executeQuery('SELECT * from students');
  }
}
