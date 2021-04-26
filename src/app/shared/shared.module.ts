import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    AuthMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidemenuComponent
  ]
})
export class SharedModule { }
