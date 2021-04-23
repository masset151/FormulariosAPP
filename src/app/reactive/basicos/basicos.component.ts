import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

/*
 miFormulario:FormGroup = new FormGroup({
   nombre:new FormControl('PS5'),
   precio:new FormControl(499),
   existencias:new FormControl(100)
 })
*/

 miFormulario:FormGroup = this.fb.group({

  nombre:['',[Validators.required,Validators.minLength(3)]],
  precio:[0,[Validators.required,Validators.min(0)]],
  existencias:[0 ,[Validators.required,Validators.min(0)]]

 })


  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'PS5',
      precio:499,
      existencias:1,
    })
  }

  validarCampo(campo:string){

    

    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].invalid

  }


  guardar(){
    if(this.miFormulario.invalid){
      return ;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched()
  }

  

}
