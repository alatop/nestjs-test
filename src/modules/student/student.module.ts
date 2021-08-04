import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from 'src/servicies/student/student.service';
import { StudentController } from 'src/controllers/student/student.controller';
import { StudentsRepository } from 'src/entites/student.repoitory';
import { PostgreService } from 'src/servicies/postgre/postgre.service';
import { PostgreModule } from '../postgre/postgre.module';

@Module({
  imports: [TypeOrmModule.forFeature([StudentsRepository]), PostgreModule],
  controllers: [StudentController],
  providers: [StudentService, PostgreService],
})
export class StudentsModule {}
