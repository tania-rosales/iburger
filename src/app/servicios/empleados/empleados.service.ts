import { Injectable } from "@angular/core";
import { empleado } from "../../modelos/nuevo-empleado.models";
import { ServicioAlertaService } from "../servicio-alerta.service";
import { DataEmpleadosServices } from "./data-empleados.service";

@Injectable({
  providedIn: 'root'
})

export class empleadosService {
  empleados: empleado [] = [];
  constructor (private servicioAlerta: ServicioAlertaService, private dataEmpleadosService: DataEmpleadosServices){}

  agregar_empleado_servicio (empleado: empleado){
    this.servicioAlerta.muestra_mensaje("Nuevo empleado ingresado");
    this.empleados.push(empleado);
    this.dataEmpleadosService.guardar_empleado(this.empleados);
  }

  encontrar_empleado (indice: number){
    let empleado: empleado = this.empleados[indice];
    return empleado;
  }

  actualizar_empleado (indice: number, empleado: empleado){
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.sexo             = empleado.sexo;
    empleadoModificado.cargo            = empleado.cargo;
    empleadoModificado.estado           = empleado.estado;
    empleadoModificado.salario          = empleado.salario;
    empleadoModificado.nombreEmpleado   = empleado.nombreEmpleado;
    empleadoModificado.fechaNacimiento  = empleado.fechaNacimiento;
    empleadoModificado.apellidoEmpleado = empleado.apellidoEmpleado;

    this.dataEmpleadosService.actualizar_empleado_posicion(indice, empleado);
  }

  eliminar_empleado (indice: number){
    this.empleados.splice(indice, 1);
    this.dataEmpleadosService.eliminar_empleado_posicion(indice);
    this.dataEmpleadosService.guardar_empleado(this.empleados);
  }

  obtener_empleados (){
    return this.dataEmpleadosService.cargar_empleado();
  }

  set_empleados (misEmpleados: empleado[]){
    this.empleados = misEmpleados;
  }

}