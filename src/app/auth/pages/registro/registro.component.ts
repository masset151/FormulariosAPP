import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 

  

    miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPatter)]],
    email: ['',[Validators.required,Validators.email,Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator.validate]],  
    username: ['',[Validators.required,this.validatorService.noPuedeSerStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]]
  },{
    Validators:[this.validatorService.camposIguales('password','password2')]
  })

  constructor(private fb:FormBuilder, private validatorService:ValidatorsService,private emailValidator:EmailValidatorService){}


  ngOnInit(){

    this.miFormulario.reset({
      nombre:"Andres Masset",
      email:"test1@test.com",
      username:'masset_151'
    })
    
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched();
  }




  
  

 

}
