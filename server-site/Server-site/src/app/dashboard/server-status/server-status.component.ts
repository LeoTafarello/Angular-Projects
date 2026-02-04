import { Component, OnDestroy, OnInit,inject,DestroyRef } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {  //usando o implements faz com que eu precise implementar essa interface, se eu errar o nome dara erro... Se for usar o metodo antigo do OnDestroy, adicionalo aki

  //private interval?: NodeJS.Timeout; //interval vai receber o valor do setInterval para ser usado no ngOnDestroy, caso nao seja mais utilizado.
  //private interval?: ReturnType<typeof setInterval>; //mudando para este modo pois se tiver esse erro -> Cannot find namespace 'NodeJS'.
  private destroyRef = inject(DestroyRef); //usando DestroyRef que é uma classe do Angular e faz a mesma coisa dos de cima, so que mais "atualizado" e so funciona no Angular v16 pra cima
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';  //estou falando que a variavel so pode receber o status online,offline ou uknown, e no caso agora seria online. Caso use pra frente e nao for igual, dara erro

  ngOnInit(){  //Usamos o ngOnInit para rodar depois de receber o input. Lembrando que para HTTP, devemos usar sempre o ngOnInit
    // this.interval = setInterval(() => {   //pode usar para o metodo antigo que seria o ngOnDestroy
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5){
        this.currentStatus = 'online';
      } else if (rnd <0.9){
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000);

    this.destroyRef.onDestroy (() => {
      clearInterval(interval);
    });

  }

  // ngOnDestroy(){ //usando ngOnDestroy para parar limpar o setIterval caso nao use mais, pois se não tera mais uso de memoria e ter impacto negativo na aplicação
  //   clearTimeout(this.interval);
  // }

}
