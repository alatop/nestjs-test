import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from 'src/servicies/student/student.service';
import { StudentController } from 'src/controllers/student/student.controller';
import { StudentsRepository } from 'src/entites/student.repoitory';

@Module({
  imports: [TypeOrmModule.forFeature([StudentsRepository])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentsModule {}
