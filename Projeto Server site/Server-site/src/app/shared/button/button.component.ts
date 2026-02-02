import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]', //usando selector button para poder estilizar botões nativos que tenham o atributo appButton. Lembrando que sempre o que esta no selector é o HOST element
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  
}
