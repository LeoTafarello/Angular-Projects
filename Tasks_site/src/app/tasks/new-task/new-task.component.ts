import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  //imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required : true}) userId!: string; // Recebe o ID do usuário para o qual a nova tarefa será atribuída
  @Output() close = new EventEmitter<void>();
  enteredTitle =''; // Two-way binding variavel para o titulo da nova tarefa
  enteredSummary = ''; // Two-way binding variavel para o resumo da nova tarefa
  enteredDate = ''; // Two-way binding variavel para a data da nova tarefa
  private tasksService = inject(TasksService); // Injeção do serviço de tarefas

  // enteredTitle = signal('');
  // enteredSummary = signal('');     como usar com signals, nao precisa torcar nada no HTML pois ele ja conhece e le que e um singal, nao usar () no NGmodel
  // enteredDate = signal('');

  onCancel(){
    this.close.emit();
  }

  onSubmite(){ // Metodo chamado quando o formulario e submetido
    this.tasksService.addTask({ // Adiciona a nova tarefa usando o serviço de tarefas
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
     this.userId); // o segundo parametro userId sera passado pelo componente pai
    this.close.emit(); // Emite o evento de fechamento para o componente pai
  }

}
