import { Component, DestroyRef, inject } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, FormArray} from '@angular/forms';
import { debounceTime, of } from 'rxjs';


function mustContainQuestionMark(control: AbstractControl){
  if (control.value.includes('?')){
    return null;
  }
  return {doesNotContainQuestioMark:true};
}

let initialEmailValue = 'default@email.com';
const savedForm = window.localStorage.getItem('saved-login-form');

    if (savedForm) {
      const loadedForm = JSON.parse(savedForm);
      initialEmailValue = loadedForm.email;
    }
    
function equalValues(controlName1:string, controlName2:string){
  return(control:AbstractControl) => {
  const val1 = control.get('controlName1')?.value;
  const val2 = control.get('controlName2')?.value;

  if(val1 === val2){
    return null;
  }
  return {passwordsNotEqual:true};
  };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports:[ReactiveFormsModule],
})
export class SignupComponent {
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators:[Validators.email, Validators.required],
    }),

    passwords: new FormGroup({
      password: new FormControl('', {
        validators:[Validators.required, Validators.minLength(5), mustContainQuestionMark],
      }),
      confirmPassword: new FormControl('',{
        validators:[Validators.required, Validators.minLength(5), mustContainQuestionMark],
      }),
    },
    {
      validators:[equalValues('password','confirmPassword')],
    }
    ),

      firstName: new FormControl('', {
        validators:[Validators.required],
      }),
      lastName: new FormControl('', {
        validators:[Validators.required],
      }),

    address: new FormGroup({
      street: new FormControl('', {
        validators:[Validators.required],
      }),
      houseNumber: new FormControl('', {
        validators:[Validators.required],
      }),
      postalCode: new FormControl('', {
        validators:[Validators.required],
      }),
      city: new FormControl('', {
        validators:[Validators.required],
      }),
    }),
    
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', {
      validators:[Validators.required],
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree : new FormControl(false,{
      validators:[Validators.required],
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
      this.form.controls.passwords.touched &&
      this.form.controls.passwords.dirty &&
      this.form.controls.passwords.invalid 
    );
  }

   get formIsInvalid(){
    return(
      this.form.dirty &&
      this.form.touched &&
      this.form.invalid 
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

    onSubmit(){
      if(this.form.invalid){
      console.log('Invalid Form');
      return;
      }
  }

  onReset(){
    this.form.reset();
  }

}
