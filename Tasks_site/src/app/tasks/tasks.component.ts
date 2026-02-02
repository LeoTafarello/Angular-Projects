import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  //imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {

  //@Input() name?: string; // recebe o nome do user selecionado, ? demostra que pode ser que nao tenha dados na variavel, caso usasse ! você diz que sempre vai ter o dado, pode ser usado desse jeito tmb "name: string | undefined;"
  @Input({required: true}) name!: string; // recebe o nome do user selecionado
  @Input({required: true}) userId!: string; // recebe o id do user selecionado
  isAddingTask = false; // controla a exibição do formulário de nova tarefa

  constructor (private tasksService: TasksService) {} //usa o constructor para injetar o serviço de tarefas

  get selectUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

   onCloseAddTask(){
    // lógica para cancelar a tarefa, se necessário
    this.isAddingTask = false;
    }
  }
