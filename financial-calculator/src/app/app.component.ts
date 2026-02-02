import { Component} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestimentResult } from "./investiment-result/investiment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestimentResult],
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
})


export class AppComponent {}
