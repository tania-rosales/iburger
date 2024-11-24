import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleado } from "../../modelos/nuevo-empleado.models";

@Injectable({
  providedIn:'root'
})

export class DataEmpleadosServices {
  constructor(private httpClient: HttpClient){}

  guardar_empleado(empleado: empleado[]){
    this.httpClient.put('https://iburger-6f44d-default-rtdb.firebaseio.com/empleados.json', empleado).subscribe(
      response => console.log("Se ha guardado los cambios en firebase"),
      error=>console.log('Error: ' + error)
    );
  }

  cargar_empleado(){
    return this.httpClient.get('https://iburger-6f44d-default-rtdb.firebaseio.com/empleados.json')
  }

  actualizar_empleado_posicion(indice: number, empleado: empleado){
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/empleados/" + indice + ".json";

    this.httpClient.put(url, empleado).subscribe(response =>console.log("Se han actualizado los datos del empleado " + response),
    error =>console.log("Error: "+ error))
  }

  eliminar_empleado_posicion(indice: number){
    let url = "https://iburger-6f44d-default-rtdb.firebaseio.com/empleados/" + indice + ".json";

    this.httpClient.delete(url).subscribe( 
      response => console.log("Se ha eliminado el empleado " + response),
      error => console.log("Error: " + error))
  }

}