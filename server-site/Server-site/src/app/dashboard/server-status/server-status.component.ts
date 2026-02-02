import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{  //usando o implements faz com que eu precise implementar essa interface, se eu errar o nome dara erro

   currentStatus: 'online' | 'offline' | 'unknown' = 'online';  //estou falando que a variavel so pode receber o status online,offline ou uknown, e no caso agora seria online. Caso use pra frente e nao for igual, dara erro

  ngOnInit(){  //Usamos o ngOnInit para rodar depois de receber o input. Lembrando que para HTTP, devemos usar sempre o ngOnInit
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5){
        this.currentStatus = 'online';
      } else if (rnd <0.9){
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000);
  }

}
