import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
<<<<<<< HEAD
  nombre:string;
  favoritos:Favoritos[]
}

interface Favoritos{
id:number;
nombre:string;
=======
  nombre:string,
  favoritos:favoritos[]
}

interface favoritos{
  id:number,
  nombre:string
>>>>>>> ef1a50ea21029928ada177c65d2a792425f04710
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{
@ViewChild('miFormulario') formulario!: NgForm
<<<<<<< HEAD
  
  nuevoJuego = '';

  persona:Persona = {
    nombre:'Andres',
    favoritos:[{
      id:1,
      nombre:'Gran Thef Auto V'
    },
    {
      id:2,
      nombre:'Fifa 21'
    }]
=======

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
>>>>>>> ef1a50ea21029928ada177c65d2a792425f04710
  }

]
}


  agregar(){
    const nuevoFavorito:Favoritos = {
      id:this.persona.favoritos.length +1 ,
      nombre:this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoJuego = ''




    console.log(this.nuevoJuego)
  }

  validar():boolean{
<<<<<<< HEAD
    return this.formulario?.controls.nombre?.errors && this.formulario.controls.nombre?.touched
  }

  eliminar(index:number){

    this.persona.favoritos.splice(index,1)
    

=======
    return this.formulario?.controls.nombre?.touched && this.formulario.controls.nombre.invalid
    
>>>>>>> ef1a50ea21029928ada177c65d2a792425f04710
  }

  guardar(){
    console.log('dentro')
  }

}
