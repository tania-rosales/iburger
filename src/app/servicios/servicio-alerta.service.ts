import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ServicioAlertaService {

  constructor() { }

  muestra_mensaje(text:string){

    Swal.fire({
      title: "Éxito",
      text,
      icon: "success"
    });
    
  }

  warning(text:string){

    Swal.fire({
      title: "Atención",
      text,
      icon: "info"
    });
    
  }
}
