import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleado } from "../../modelos/nuevo-empleado.models";
import { LoginService } from "../../componentes/login/login.service";

@Injectable({
  providedIn:'root'
})

export class DataEmpleadosServices {
  constructor(private httpClient: HttpClient, private loginService: LoginService){}

  guardar_empleado(empleado: empleado[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://iburger-6f44d-default-rtdb.firebaseio.com/empleados.json?auth=' + token, empleado).subscribe(
      response => console.log("Se ha guardado los cambios en firebase"),
      error=>console.log('Error: ' + error)
    );
  }

  cargar_empleado(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://iburger-6f44d-default-rtdb.firebaseio.com/empleados.json?auth=' + token)
  }

  actualizar_empleado_posicion(indice: number, empleado: empleado){
    const token = this.loginService.getIdToken();
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/empleados/" + indice + ".json?auth=" + token;

    this.httpClient.put(url, empleado).subscribe(response =>console.log("Se han actualizado los datos del empleado " + response),
    error =>console.log("Error: "+ error))
  }

  eliminar_empleado_posicion(indice: number){
    const token = this.loginService.getIdToken();
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/empleados/" + indice + ".json?auth=" + token;

    this.httpClient.delete(url).subscribe( 
      response => console.log("Se ha eliminado el empleado " + response),
      error => console.log("Error: " + error))
  }

}