import { Injectable } from "@angular/core";
import {type NewTaskData } from "./new-task/new-task.model";

@Injectable({providedIn: 'root'}) // torna o serviço disponível em toda a aplicação

export class TasksService{ // serviço para gerenciar tarefas
    private tasks = [
    {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
  ];

  constructor(){ // construtor do serviço
    const tasks = localStorage.getItem('tasks'); // tenta recuperar as tarefas do localStorage
    if (tasks){ // se encontrar tarefas salvas
      this.tasks = JSON.parse(tasks); // se encontrar, atualiza o array de tarefas com os dados recuperados
    }
  }


  getUserTasks (userID:string){
    return this.tasks.filter((task) => task.userId === userID);
  }

  addTask(taskData:NewTaskData,userId:string){
    this.tasks.unshift({
      id: new Date().getTime().toString(), // Gera um id aleatório para a nova tarefa
      title:taskData.title, //  Título da nova tarefa
      summary: taskData.summary, // Resumo da nova tarefa
      dueDate: taskData.date, // Data de vencimento da nova tarefa
      userId: userId // Atribui a tarefa ao usuário atualmente selecionado
    });
    this.saveTasks(); // salva as tarefas atualizadas no localStorage
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id); // remove a task com o id recebido do array de tasks
    this.saveTasks(); // salva as tarefas atualizadas no localStorage
  }

  private saveTasks(){ // método privado para salvar as tarefas no localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // salva o array de tasks no localStorage
  }

}