import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos:Favoritos[]
}

interface Favoritos{
id:number;
nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{
@ViewChild('miFormulario') formulario!: NgForm
  
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
    return this.formulario?.controls.nombre?.errors && this.formulario.controls.nombre?.touched
  }

  eliminar(index:number){

    this.persona.favoritos.splice(index,1)
    

  }

  guardar(){
    console.log('dentro')
  }

}
