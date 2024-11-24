import { Injectable } from "@angular/core";
import { combo } from "../../modelos/nuevo-combo.models";
import { ServicioAlertaService } from "../servicio-alerta.service";
import { DataCombosServices } from "./data-combos.service";

@Injectable({
  providedIn: 'root'
})
export class combosService{
  combos: combo[] = [];

  constructor (private servicioAlerta: ServicioAlertaService, private dataCombosServices: DataCombosServices){}

  agregar_combo_servicio (combo: combo){
    this.servicioAlerta.muestra_mensaje("Nuevo combo ingresado");
    this.combos.push(combo);
    this.dataCombosServices.guardar_combo(this.combos);
  }

  encontrar_combo (indice: number){
    let combo: combo = this.combos[indice];
    return combo;
  }

  actualizar_combo (indice: number, combo: combo){
    let comboModificado = this.combos[indice];
    comboModificado.nombreCombo = combo.nombreCombo;
    comboModificado.costo = combo.costo;
    comboModificado.fecha = combo.fecha;
    comboModificado.descripcion = combo.descripcion;
    comboModificado.estado = combo.estado;

    this.dataCombosServices.actualizar_combo_posicion(indice, combo);
  }

  eliminar_combo (indice: number){
    this.combos.splice(indice, 1);
    this.dataCombosServices.eliminar_combo_posicion(indice);
    this.dataCombosServices.guardar_combo(this.combos);
  }

  obtener_combos (){
    return this.dataCombosServices.cargar_combo();
  }

  set_combos (misCombos: combo[]){
    this.combos = misCombos;
  }

}