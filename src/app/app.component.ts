import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularheroku';

  edadUno : number;
  edadDos : number;
  suma : number;
  promedio: number;

  Calcular(){
    if(this.edadUno !=null && this.edadDos!=null){
      this.suma = this.edadUno + this.edadDos;
      this.promedio = this.suma /2;
    }
  }

  CleanInput(){
    this.edadUno=null;
    this.edadDos=null;
    this.suma=null;
    this.promedio=null;
  }
}