import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false //disable cache mecanismo do Angular, agora sempre q mudar o dado dentro do array o angular vai sempre dar um "reaload", pois ele sempre guarda no cache e assim so mudaria se mudasse ID da array que nunca acontece
})
export class SortPipe implements PipeTransform {

  transform(value: string [] | number[], direction: 'asc' | 'desc' = 'asc'){
    const sorted = [...value]; //queremos criar 1 copia para mudar ela nao o valor do array que estamos pegando do value
    sorted.sort((a,b)=>{    //muda a array que estamos chamando
      if (direction === 'asc'){
        return a > b ? 1: -1
      }else {
        return a> b ? -1:1;
      }
    });
    return sorted;
  }

}
