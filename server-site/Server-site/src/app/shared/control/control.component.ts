import { Component, HostBinding, input, ViewEncapsulation,HostListener, inject,ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // para o css desse componente afetar os elementos projetados dentro dele (input, textarea, etc) desabilitando o encapsulamento de estilo
   host:{   // adiciona a classe 'control' ao elemento host desse componente, assim nao precisamos adicionar manualmente a classe control no html
     class: 'control',
       '(click)':'onClick()' /* quando a ação CLICK acontecer ele ativa a função onClick. precisa criar a função obviamente se não, não ira pegar */
   }
})

export class ControlComponent {

  // @HostBinding('class') className = 'control' //faz mesma coisa que o host comentado acima mas nao e legal usar, deveria usar o de cima
    //  @HostListener('click') onClick(){    //mesma coisa do host
    //   console.log('Clicked');
    //  }

  label = input.required<string>();

  private el = inject(ElementRef);

  onClick(){
    console.log('Clicked');
    console.log(this.el);
  }
  
}
