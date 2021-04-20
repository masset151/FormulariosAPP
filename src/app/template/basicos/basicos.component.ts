import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') formulario!: NgForm


  constructor() { }

  ngOnInit(): void {
  }


  nombreValido(): boolean {
    return this.formulario?.controls.producto?.invalid
      && this.formulario.controls.producto?.touched
  }

  precioValido(): boolean {
    this.formulario?.controls?.precio?.setErrors(null)
    return this.formulario?.controls.precio?.touched && this.formulario?.controls.precio?.value < 0
  }


  guardar() {
    
    
    
    console.log(this.formulario)


  }

}
