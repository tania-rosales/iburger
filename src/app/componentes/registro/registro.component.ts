import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { CommonModule } from '@angular/common';
import { ServicioAlertaService } from '../../servicios/servicio-alerta.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  providers: [ServicioAlertaService],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor (private loginService: LoginService, private miAlerta: ServicioAlertaService){}

  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  onRegister () {
    this.loginService.registro(this.email, this.password)
    .then(() => {
        this.errorMessage = null; // Limpiamos el mensaje en caso de éxito
      })
      .catch(error => {
        this.errorMessage = `Error inesperado: ${error.message}`;
      });
  }

}
