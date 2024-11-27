import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { orden } from "../../modelos/nueva-orden.models";
import { LoginService } from "../../componentes/login/login.service";

@Injectable({
  providedIn: 'root'
})

export class DataServices {
  constructor (private httpClient: HttpClient, private loginService: LoginService){}

  guardar_orden(orden: orden[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://iburger-6f44d-default-rtdb.firebaseio.com/ordenes.json?auth=' + token, orden).subscribe(
      response => console.log("Se ha guardado los cambios en firebase"),
      error=>console.log('Error: ' + error)
    );
  }

  cargar_orden(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://iburger-6f44d-default-rtdb.firebaseio.com/ordenes.json?auth=' + token)
  }

  actualizar_orden_posicion(indice: number, orden: orden){
    const token = this.loginService.getIdToken();
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/ordenes/" + indice + ".json?auth=" + token;

    this.httpClient.put(url, orden).subscribe(response =>console.log("Se ha actualizado la orden " + response),
    error =>console.log("Error: "+ error))
  }

  eliminar_orden_posicion(indice: number){
    const token = this.loginService.getIdToken();
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/ordenes/" + indice + ".json?auth=" + token;

    this.httpClient.delete(url).subscribe( 
      response => console.log("Se ha eliminado la orden " + response),
      error => console.log("Error: " + error))
  }
}