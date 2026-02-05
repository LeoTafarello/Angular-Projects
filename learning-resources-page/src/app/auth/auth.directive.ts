import { Directive,input, inject, effect, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); //da acesso ao conteudo do template
  private viewContainerRef = inject(ViewContainerRef); //da acesso ao lugar do Doom que esta sendo usado (o template)

  constructor() {
    effect(()=> {
      if (this.authService.activePermission() === this.userType()){ 
        this.viewContainerRef.createEmbeddedView(this.templateRef); //faz com que o conteudo seja renderizado no lugar especifico do DOOM que foi passado no view. entao seria carregar o valor que voce quer mostrar na tela (seria no HTML o <p>), pois se nao iria ficar la sempre pra qualquer 1, aki carrega o valor
      }else{
        this.viewContainerRef.clear(); //remove o valor
       }
    });
   }

}
