import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.taskService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateTaskDto) {
    return this.taskService.create(body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.taskService.update(id, body);
  }
}
