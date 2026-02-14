import { afterNextRender, Component, DestroyRef, viewChild, inject } from '@angular/core';
import {FormsModule, NgForm, FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl){
  if (control.value.includes('?')){
    return null;
  }
  return {doesNotContainQuestioMark:true};
}

function emailIsUnique(control: AbstractControl){
  if (control.value !== 'test@example.com'){
    return of(null);
  }
  return of({notUnique:true});
}

let initialEmailValue = 'default@email.com';
const savedForm = window.localStorage.getItem('saved-login-form');

    if (savedForm) {
      const loadedForm = JSON.parse(savedForm);
      initialEmailValue = loadedForm.email;
    }

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports:[ReactiveFormsModule],
})
export class LoginComponent {
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators:[ Validators.email, Validators.required],
      asyncValidators:[emailIsUnique],
    }),
    password: new FormControl('', {
      validators:[ Validators.required, Validators.minLength(5), mustContainQuestionMark],
    }),
  });

  get emailIsInvalid(){
    return(
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid 
    );
  }

  get passwordIsInvalid(){
    return(
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid 
    );
  }

  ngOnInit(){
    
    const subscription = this.form.valueChanges
    .pipe(debounceTime(500))
    .subscribe({
      next: value => {
        window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email}));
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  OnSubmit(){

  }

  // private form = viewChild.required<NgForm>('form');
  // private destroyRef = inject(DestroyRef);

  // constructor(){
  //   afterNextRender(() => {
  //     const savedForm = window.localStorage.getItem('saved-login-form');

  //     if(savedForm){
  //       const loadedFormData = JSON.parse(savedForm);
  //       const savedEmail = loadedFormData.email;
  //       setTimeout(() => {
  //         this.form().controls['email'].setValue(savedEmail);
  //       },1);
  //     }

  //     const subscription = this.form().valueChanges
  //     ?.pipe(debounceTime(500)) //usando para ir para o next se o user parar de escrever em 500 segundos.
  //     .subscribe({
  //       next: (value) => window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email}) //guardando o dado no local storage do browser e como ele so aceita string, estou transformando com o JSON para string
  //       ),
  //     });
      
  //     this.destroyRef.onDestroy(() => subscription?.unsubscribe());
  //   });
  // }

  // OnSubmit(formData: NgForm){

  //   if (formData.form.invalid){
  //     return;
  //   }
  //   const enteredEmail= formData.form.value.email;
  //   const enteredPassword= formData.form.value.password;

  //   formData.form.reset();
  // }
}
