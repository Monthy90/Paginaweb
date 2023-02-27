import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css']
})
export class ResgistroComponent {

  mensaje:string=""
  actived:boolean=false;




  emailPattern: string = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";

 
  logintForm:FormGroup=this.fb.group({ 
      name:       ['', [Validators.required, Validators.minLength(3)]],
      appate:     ['', [Validators.required, Validators.minLength(3)]],
      apmate:     ['', [Validators.required, Validators.minLength(3)]],
      nameuser:   ['', [Validators.required]],
      email:      ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      password:   ['',[Validators.required, Validators.minLength(6)]],
      pass2:      ['',[Validators.required]],
      checkbox:   ['', [Validators.required]],
      edad:       ['', [Validators.required]],
  },
  {
    validators: this.passiguales('password','pass2')
  }
      )
  
  constructor(private  fb: FormBuilder,
              private router:Router,
              ) { }


get nombreError(){
  const errors=this.logintForm.get('name')?.errors;

  if(errors?.['required']){
    return 'Debe ser obligatorio';
  }
  return ''

}
get emailError(){
  const errors=this.logintForm.get('email')?.errors;

  if(errors?.['required']){
    return 'Debe ser obligatorio';
  }else if (errors?.['pattern']){
    return 'Ingrese un correo valido'
  }
  return ''
}
get usererror(){
  const errors=this.logintForm.get('nameuser')?.errors;

  if(errors?.['required']){
    return 'Debe ser obligatorio';
  }
  return ''
}
get edaderror(){
  const errors=this.logintForm.get('edad')?.errors;

  if(errors?.['required']){
    return 'Debe ser obligatorio';
  }
  return ''
}

get pater(){
  const errors=this.logintForm.get('appate')?.errors;

  if(errors?.['required']){
    return 'Debe ser obligatorio';
  }
  return ''
}
get mater(){
  const errors=this.logintForm.get('apmate')?.errors;

  if(errors?.['required']){
    return 'Debe ser obligatorio';
  }
  return ''
}


  
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.logintForm.markAllAsTouched();
    if(this.logintForm.valid){
     
      console.log('Form ->', this.logintForm.value);
    }
   
  }


  camponovalido(campo:string){
    return  this.logintForm.get(campo)?.invalid
          && this.logintForm.get(campo)?.touched
       
          

  }
  camposiguales(){

  
      const pass =this.logintForm.get('password')?.value;
      const pass2 =this.logintForm.get('pass2')?.value;
      return(pass==pass2) ?false:true;


  }
  passiguales(passname:string,pass2name:string){
    return(FormGroup:FormGroup)=>{
      const passControl = FormGroup.controls[passname];
      const pass2Control = FormGroup.controls[pass2name];
     if(passControl.value===pass2Control.value  ){
      pass2Control.setErrors(null);
     }
     else{
      pass2Control.setErrors({noesigual:true})
     }
    }
  }

}
