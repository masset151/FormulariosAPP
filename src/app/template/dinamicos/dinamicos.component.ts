import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
@ViewChild('miFormulario') formulario!: NgForm
  constructor() { }

  ngOnInit(): void {
  }


  validar():boolean{
    return this.formulario.controls.nombre?.valid && this.formulario.controls.nombre?.touched
  }

  guardar(){
    console.log('dentro')
  }

}
