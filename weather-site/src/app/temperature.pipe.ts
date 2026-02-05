import { input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})

export class TemperaturePipe implements PipeTransform {

  transform(value: string | number | null, inputType:'cel' | 'fah', outputType?:'cel' | 'fah'){

    if (!value){
      return value;
    }
    
    let val:number;
    if(typeof value === 'string'){
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp:number;

    if (inputType === 'cel' && outputType === 'fah'){
       outputTemp = val * (9/5) + 32; // calculo para transformar Celsius para Fahrenheit
    }else if (inputType === 'fah' && outputType === 'cel'){
      outputTemp = (val - 32) * (5/9); //calculo para transformar Fah para Cel
    } else {
      outputTemp = val;
    }

    let symbol: 'ºC' | 'ºF'

    if (!outputType){
      symbol = inputType === 'cel' ? 'ºC': 'ºF';
    } else {
      symbol = outputType === 'cel' ? 'ºC': 'ºF';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`; //fixed usado para saber quantos numeros vc quer depois do decimal
  }

}
