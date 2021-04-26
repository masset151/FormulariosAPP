import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Gran Thef Auto V', Validators.required],
      ['EA Sport Fifa 21', Validators.required],
    ], Validators.required)
  });

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }




  validarCampo() {
    return this.miFormulario.controls.nombre.touched && this.miFormulario.controls.nombre.invalid
  }

  guardar() {

    if (this.miFormulario.invalid) {
      console.error('El Formulario no es valido')
      this.miFormulario.markAllAsTouched()
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset()


  }

}
