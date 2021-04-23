import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import {ReactiveFormsModule } from '@angular/forms';
>>>>>>> ef1a50ea21029928ada177c65d2a792425f04710


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    ReactiveFormsModule
>>>>>>> ef1a50ea21029928ada177c65d2a792425f04710
  ]
})
export class ReactiveModule { }
