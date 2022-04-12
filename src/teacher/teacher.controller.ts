import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'all teachers';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'by id';
  }

  @Post()
  createTeacher() {
    return 'create teacher';
  }

  @Put()
  updateTeacher() {
    return 'update teacher';
  }
}
