import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { combo } from "../../modelos/nuevo-combo.models";
import { LoginService } from "../../componentes/login/login.service";

@Injectable({
  providedIn: 'root'
})

export class DataCombosServices {
  constructor (private httpClient: HttpClient, private loginService: LoginService){}

  guardar_combo(combo: combo[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://iburger-6f44d-default-rtdb.firebaseio.com/combos.json?auth=' + token, combo).subscribe(
      response => console.log("Se ha guardado los cambios en firebase"),
      error=>console.log('Error: ' + error)
    );
  }

  cargar_combo(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://iburger-6f44d-default-rtdb.firebaseio.com/combos.json?auth=' + token)
  }

  actualizar_combo_posicion(indice: number, combo: combo){
    const token = this.loginService.getIdToken();
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/combos/" + indice + ".json?auth=" + token;

    this.httpClient.put(url, combo).subscribe(response =>console.log("Se ha actualizado el combo " + response),
    error =>console.log("Error: "+ error))
  }

  eliminar_combo_posicion(indice: number){
    const token = this.loginService.getIdToken();
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/combos/" + indice + ".json?auth=" + token;

    this.httpClient.delete(url).subscribe( 
      response => console.log("Se ha eliminado el combo " + response),
      error => console.log("Error: " + error))
  }
}