import { AfterViewInit, Component, ElementRef, viewChild,output} from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit {

  //OnSubmit(tittleElement: HTMLInputElement){  //peguei o tipo passando o mouse em cima da variavel #titleInput
    //console.dir(tittleElement.value); //console.log vai retornar 1 JS objetc, por isso usar DIR para mostrar Object que da pra ver as propriedades
  //}

  //@ViewChild('form') form?:ElementRef<HTMLFormElement>;  //estou pedindo para ViewChild pegar os valores do elementro form do html e passar para a variavel form
   private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{title:string;text:string}>();

  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form().nativeElement)
    
  }

  OnSubmit (title:string, ticketText:string){  //usando title como 1 valor passado do ngSubmit e ticket como 2 valor e falando que serão strings
    console.log(title);
    console.log(ticketText);
    //this.form?.nativeElement.reset(); // usado para resetar os campos, tornando eles branco novamente. Usando '?' para falar que so vai funcionar se nao foi UNDEFINED
    this.form().nativeElement.reset();
    this.add.emit({title:title, text:ticketText});
  }

}
