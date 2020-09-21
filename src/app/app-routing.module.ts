import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import {GrillaPaisesComponent} from './grilla-paises/grilla-paises.component';

const routes : Routes = [
  {path: '', component : LoginComponent},
  {path: 'bienvenido', component : BienvenidoComponent},
  {path: 'grilla-paises', component : GrillaPaisesComponent},
  {path: '**', component : ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
