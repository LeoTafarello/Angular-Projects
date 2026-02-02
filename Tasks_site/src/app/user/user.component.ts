import { Component, signal, computed, Input, input, Output, output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); //Random Number index for demonstration, escolher numero aleatório para o user

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: false,
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  //selectedUser = signal(DUMMY_USERS[randomIndex]);

  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
   get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  //  imagePath = computed(() => {
//    return 'assets/users/' + this.avatar();
  //});                                                             USADO COM SIGNAL, MAS GERALMENTE NAO SE USA ASSIM EM EMPRESAS GRANDE


  //onSelectUser() {
  //  const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); //Random Number index for demonstration, escolher numero aleatório para o user
  //  this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //}

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!:boolean; //input para saber se o user esta selecionado ou nao
  
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;  //mesma coisa q de baixo, so que mais dificil
  //  avatar = input.required<string>();
  //  name = input.required<string>();


  @Output() select = new EventEmitter<string>(); //nao e necessario falar o Tipo de Var, mas é bom para nao ter erro no OnSelectUser, caso use this.select.emit(2) que seria Number dentro;
  //select = output<string>();  jeito mais facil usando SIGNAL comparado ao de cima

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
