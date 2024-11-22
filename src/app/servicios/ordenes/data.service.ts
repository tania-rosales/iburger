import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { orden } from "../../modelos/nueva-orden.models";

@Injectable({
  providedIn: 'root'
})

export class DataServices {
  constructor (private httpClient: HttpClient){}

  guardar_orden(orden: orden[]){
    this.httpClient.put('https://iburger-6f44d-default-rtdb.firebaseio.com/ordenes.json', orden).subscribe(
      response => console.log("Se ha guardado los cambios en firebase"),
      error=>console.log('Error: ' + error)
    );
  }

  cargar_orden(){
    return this.httpClient.get('https://iburger-6f44d-default-rtdb.firebaseio.com/ordenes.json')
  }

  actualizar_orden_posicion(indice: number, orden: orden){
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/ordenes/" + indice + ".json";

    this.httpClient.put(url, orden).subscribe(response =>console.log("Se ha actualizado la orden " + response),
    error =>console.log("Error: "+ error))
  }

  eliminar_orden_posicion(indice: number){
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/ordenes/" + indice + ".json";

    this.httpClient.delete(url).subscribe( 
      response => console.log("Se ha eliminado la orden " + response),
      error => console.log("Error: " + error))
  }
}