import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { combo } from "../../modelos/nuevo-combo.models";

@Injectable({
  providedIn: 'root'
})

export class DataCombosServices {
  constructor (private httpClient: HttpClient){}

  guardar_combo(combo: combo[]){
    this.httpClient.put('https://iburger-6f44d-default-rtdb.firebaseio.com/combos.json', combo).subscribe(
      response => console.log("Se ha guardado los cambios en firebase"),
      error=>console.log('Error: ' + error)
    );
  }

  cargar_combo(){
    return this.httpClient.get('https://iburger-6f44d-default-rtdb.firebaseio.com/combos.json')
  }

  actualizar_combo_posicion(indice: number, combo: combo){
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/combos/" + indice + ".json";

    this.httpClient.put(url, combo).subscribe(response =>console.log("Se ha actualizado la orden " + response),
    error =>console.log("Error: "+ error))
  }

  eliminar_combo_posicion(indice: number){
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/combos/" + indice + ".json";

    this.httpClient.delete(url).subscribe( 
      response => console.log("Se ha eliminado la orden " + response),
      error => console.log("Error: " + error))
  }
}