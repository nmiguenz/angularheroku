import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usuario = new Usuario()

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.usuario.email = '';
    this.usuario.pass = '';
  }

  Ingresar(){
    console.log(this.usuario);

    if(this.usuario.email === "usuario@gmail.com" && this.usuario.pass === "1234"){
      
      this.usuario.perfil = 'Admin';
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      // falta completar
      this.router.navigate(['bienvenido']);

    }
    else{
      this.router.navigate(['error']);
    }
  }

}
