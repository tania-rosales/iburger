import { Injectable } from "@angular/core";
import { orden } from "../../modelos/nueva-orden.models";
import { ServicioAlertaService } from "../servicio-alerta.service";
import { DataServices } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class ordenesService{
  ordenes: orden[] = [];

  constructor (private servicioAlerta: ServicioAlertaService, private dataService: DataServices){}

  agregar_orden_servicio (orden: orden){
    this.servicioAlerta.muestra_mensaje("Nueva orden ingresada");
    this.ordenes.push(orden);
    this.dataService.guardar_orden(this.ordenes);
  }

  encontrar_orden (indice: number){
    let orden: orden = this.ordenes[indice];
    return orden;
  }

  actualizar_orden (indice: number, orden: orden){
    let ordenModificada = this.ordenes[indice];
    ordenModificada.nombreCombo = orden.nombreCombo;
    ordenModificada.costo = orden.costo;
    ordenModificada.vendedor = orden.vendedor;
    ordenModificada.cliente = orden.cliente;
    ordenModificada.fecha = orden.fecha;
    ordenModificada.propina = orden.propina;

    this.dataService.actualizar_orden_posicion(indice, orden);
  }

  eliminar_orden (indice: number){
    this.ordenes.splice(indice, 1);
    this.dataService.eliminar_orden_posicion(indice);
    this.dataService.guardar_orden(this.ordenes);
  }

  obtener_ordenes (){
    return this.dataService.cargar_orden();
  }

  set_ordenes (misOrdenes: orden[]){
    this.ordenes = misOrdenes;
  }
}