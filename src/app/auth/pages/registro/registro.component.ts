import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 

  nombreApellidoPatter:string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.nombreApellidoPatter)]],
    email: ['',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]],  
    username: ['',[Validators.required,this.noPuedeSerStrider]]
  })

  constructor(private fb:FormBuilder){}


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

  noPuedeSerStrider(control:FormControl){

    const valor:string = control.value?.trim().toLowerCase()
    if(valor == 'strider'){
      return {
        noStrider: true,


      }
    }

    return null;

  }

 

}
