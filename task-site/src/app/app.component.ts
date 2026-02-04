import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html', // referencia da onde vc pega o HTML
  styleUrl: './app.component.css', // referencia da onde vc pega o CSS
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId?: string; //cria variavel pra receber o ID do user selecionado

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);  // selecionar o mesmo user atraves do user ID do onSelectUser
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;  // atribui o ID do user selecionado a variavel selectedUserId
  }

}
