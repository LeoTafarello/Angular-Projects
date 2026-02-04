import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //OnSubmit(tittleElement: HTMLInputElement){  //peguei o tipo passando o mouse em cima da variavel #titleInput
    //console.dir(tittleElement.value); //console.log vai retornar 1 JS objetc, por isso usar DIR para mostrar Object que da pra ver as propriedades
  //}

  OnSubmit (title:string, ticketText:string){  //usando title como 1 valor passado do ngSubmit e ticket como 2 valor e falando que serão strings
    console.log(title);
    console.log(ticketText);
  }

}
