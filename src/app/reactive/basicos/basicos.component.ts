import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

/*
 miFormulario:FormGroup = new FormGroup({
   nombre:new FormControl('PS5'),
   precio:new FormControl(499),
   existencias:new FormControl(100)
 })
*/

 miFormulario:FormGroup = this.fb.group({

  nombre:['PS5'],
  precio:[0],
  existencias:[0]

 })

  constructor(private fb:FormBuilder) { }

  

}
