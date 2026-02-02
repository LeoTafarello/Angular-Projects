import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input } from '@angular/core';
import { AppInvestmentService } from '../app-investiment.service';

@Component({
  selector: 'app-investiment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investiment-result.component.html',
  styleUrl: './investiment-result.component.css',
})
export class InvestimentResult {


  private investmentService = inject(AppInvestmentService);

  get results() {
    return this.investmentService.resultsData;
  }

    // results = computed(() => this.investmentService.resultsData());  // com signal ficaria assim para atualizar automaticamente quando os dados mudarem
    //results = this.investmentService.resultsData.asReadonly(); //metodo provado pelo Angular para acessar dados de services com signals sem manipular os dados


  // caso quisse usar com signal, era so usar exemplo abaixo
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[]>();

// @Input() results?: {
//     year: number,
//     interest: number,
//     valueEndOfYear: number,
//     annualInvestment: number,
//     totalInterest: number,
//     totalAmountInvested: number
//   }[];

}
