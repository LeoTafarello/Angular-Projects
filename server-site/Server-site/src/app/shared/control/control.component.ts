import { Component, input, ViewEncapsulation,inject,ElementRef,ContentChild,afterRender } from '@angular/core';

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
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;  //quando vc tem um content usando ng = 'ng-content'. Voce devera usar o ContentChild pois nao conseguimos acessar o ng. Assim criei o 'input' no new-ticket que seria onde o ng esta puxando.
  //private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor(){
    afterRender(() => {   //vai executar depois de qualquer mudança em qualquer lugar.....caso usasse afterNextRender, so executa depois da proxima mudança
      console.log(afterRender);
    });
  }

  onClick(){
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control);
    //console.log(this.control());
  }
  
}
