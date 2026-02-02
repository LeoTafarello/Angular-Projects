import { Injectable } from "@angular/core";
import { NewCalculatedReturn } from "./user-input/user-input.model";

@Injectable({ providedIn: 'root' }) // Decorator para tornar o servico disponivel em toda a aplicacao

export class AppInvestmentService {

    resultsData?: {
     year: number,
     interest: number,
     valueEndOfYear: number,
     annualInvestment: number,
     totalInterest: number,
     totalAmountInvested: number
   }[];

     //   Usando signal para armazenar os dados calculados abaixo

  //   resultsData = signal<{
  //    year: number,
  //    interest: number,
  //    valueEndOfYear: number,
  //    annualInvestment: number,
  //    totalInterest: number,
  //    totalAmountInvested: number
  //  }[] | undefined>(undefined);

    CalculatedInvestiment(newCalculatedReturn: NewCalculatedReturn){
  
      const annualData = [];
      let investmentValue = newCalculatedReturn.initialInvestment;
  
    for (let i = 0; i < newCalculatedReturn.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (newCalculatedReturn.expectedReturn / 100);
      investmentValue += interestEarnedInYear + newCalculatedReturn.annualInvestment;
      const totalInterest =
        investmentValue - newCalculatedReturn.annualInvestment * year - newCalculatedReturn.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: newCalculatedReturn.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: newCalculatedReturn.initialInvestment + newCalculatedReturn.annualInvestment * year,
      });
    }
  
    this.resultsData = annualData;
    // com signal ficaria ->  this.resultsData.set(annualData);
    }

}