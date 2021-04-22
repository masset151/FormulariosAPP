import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string,
  favoritos:favoritos[]
}

interface favoritos{
  id:number,
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{
@ViewChild('miFormulario') formulario!: NgForm

persona:Persona = {
nombre:'Andres',
favoritos:[
  {
    id:1,
    nombre:'Fifa 21'
  },

  {
    id:2,
    nombre:'Grand Thef Auto V'
  }

]
}


  validar():boolean{
    return this.formulario?.controls.nombre?.touched && this.formulario.controls.nombre.invalid
    
  }

  guardar(){
    console.log('dentro')
  }

}
