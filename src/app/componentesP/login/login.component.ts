import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  mensajeeror:string=""
  emailPattern: string = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";
  logForm!: FormGroup;
  mensaje:string=""
  actived:boolean=false;
  usuario:string=""
  constructor(private readonly fb: FormBuilder,
              private router:Router,
            ) { 

              }
 

  ngOnInit(): void {

   
    this.logForm = this.initForm();
  }

  onSubmit(): void {

    this.logForm.markAllAsTouched();
    if(this.logForm.valid){
       console.log('Form ->', this.logForm.value);
    }
   
    
    this.mensaje="Registrado"
    this.actived=true

   
  }

  initForm(): FormGroup {
    return this.fb.group({

      
      email:     ['', [Validators.required,Validators.pattern(this.emailPattern)]],
     
      password:  ['',[Validators.required, Validators.minLength(6)]],
     })
  }



  

  camponovalido(campo:string){
    return  this.logForm.get(campo)?.invalid
          && this.logForm.get(campo)?.touched
       
          

  }
}
