import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { GetStudentsDto, CreateStudentDto } from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): GetStudentsDto[] {
    return 'hello grom get students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto) {
    return 'hello from create student';
  }

  @Put('/:studentId')
  updatedStudent(@Param('studentId') studentId: string, @Body() body) {
    console.log(studentId);
    console.log(body);
    return `hellos`;
  }
}
