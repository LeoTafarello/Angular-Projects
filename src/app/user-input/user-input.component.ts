import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppInvestmentService } from '../app-investiment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {

  // caso quisse usar metodo output, abaixo o codigo

  // Calculate = output<InvestmentInputData>();

  // @Output() Calculate = new EventEmitter<NewCalculatedReturn>();

  //Usando caso abaixo como signals do Angular

  // enteredInitialInvestment = signal ('0');
  // enteredAnualInvestment = signal ('0');
  // enteredExpectedReturn = signal ('5');
  // enteredDuration = signal ('10');

  enteredInitialInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private AppinvestimentService: AppInvestmentService) {} // Injetando o servico de investimento para usar o metodo de calculo do service

onSubmit(){ // Metodo chamado quando o formulario e submetido
    this.AppinvestimentService.CalculatedInvestiment({
      initialInvestment: +this.enteredInitialInvestment,  //quando usa o + antes da variavel ele converte a string para numero
      annualInvestment: +this.enteredAnualInvestment,   // caso quissese usar signal, deveriamos so colocar o () apos o dado final -> +this.enteredAnualInvestment()
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    });

    this.enteredAnualInvestment = '0';   // Resetando os valores apos o envio do formulario
    this.enteredInitialInvestment = '0';  // caso queira usar signal, deveriamos so colocar o () apos o dado final -> this.enteredInitialInvestment.set('0')
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';

  }
}