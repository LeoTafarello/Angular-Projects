import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,  //so usar se o Angular 19 ou mais sempre vai ser true como DEFAULT
  templateUrl: './header.component.html', // referencia da onde vc pega o HTML
  styleUrls: ['./header.component.css'], // referencia da onde vc pega o CSS
})


export class HeaderComponent {}
