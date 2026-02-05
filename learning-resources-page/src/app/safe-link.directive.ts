import { Directive,input,inject, ElementRef } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'  
    }
})
export class SafeLinkDirective{
    queryParam = input('myapp', { alias:'appSafeLink'});  //agora o queryParam pode ser usado e chamado como appSafeLink em codigos externos
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor(){
    }

    onConfirmLeavePage(event: MouseEvent){
        const wantsToLeave = window.confirm('Do you want to leave the app?');

        if(wantsToLeave){
            //const address = (event.target as HTMLAnchorElement).href; //usando as HTMLAnchorElement, a gente convence o Angular que o event.target é HTML e assim pegando o href que seria a pagina q iremos
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam(); // mudando o link e aplicando ?from=myapp no final do link caso a pessoa clique
            return;
        }
        event.preventDefault();

    }

}