import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { empleado } from '../../modelos/nuevo-empleado.models';
import { empleadosService } from '../../servicios/empleados/empleados.service';
import { ServicioAlertaService } from '../../servicios/servicio-alerta.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empleados-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [ServicioAlertaService],
  templateUrl: './empleados-component.component.html',
  styleUrl: './empleados-component.component.css'
})
export class EmpleadosComponentComponent implements OnInit{
  @Input() empleadosLista: empleado;
  @Input() indice: number;

  titulo = 'Empleados';

  empleados: empleado[];
  cuadroNombre: string ="";
  cuadroApellido: string ="";
  cuadroCargo: string ="";
  cuadroSalario: number;
  cuadroFechaNacimiento: Date;
  cuadroSexo: string = "";
  estadoEmpleado: boolean = true;
  maxDate: string;

  constructor(private miAlerta: ServicioAlertaService, private empleadosService: empleadosService){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    this.maxDate = `${year}-${month}-${day}`;
    this.cuadroFechaNacimiento = new Date(this.maxDate);
  }

  ngOnInit(): void {
      this.empleadosService.obtener_empleados().subscribe(
        misEmpleados => {
          console.log(misEmpleados);
          this.empleados = Object.values(misEmpleados);
          this.empleadosService.set_empleados(this.empleados);
        }
      );
  }

  guardar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre,
                                  this.cuadroApellido,
                                  this.cuadroCargo,
                                  this.cuadroSalario,
                                  this.cuadroFechaNacimiento,
                                  this.cuadroSexo
                                );
    this.empleadosService.agregar_empleado_servicio(miEmpleado)
    this.cuadroNombre="";
    this.cuadroApellido="";
    this.cuadroCargo="";
    this.cuadroSalario;
    this.cuadroFechaNacimiento;
    this.cuadroSexo="";
  }

  limpiarFormulario(formulario: any) {
    formulario.resetForm();
  }

  onSubmit(formNuevoEmpleado: NgForm) {
    if (formNuevoEmpleado.valid) {
      // Enviar los datos del formulario
      console.log(formNuevoEmpleado.value);
    } else {
      // Mostrar mensajes de error o realizar otras acciones
      console.log('Formulario inválido');
    }
  }

}
