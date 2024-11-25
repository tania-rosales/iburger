import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empleado } from '../../modelos/nuevo-empleado.models';
import { FormsModule } from '@angular/forms';
import { empleadosService } from '../../servicios/empleados/empleados.service';

@Component({
  selector: 'app-actualiza-empleado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [],
  templateUrl: './actualiza-empleado.component.html',
  styleUrl: './actualiza-empleado.component.css'
})
export class ActualizaEmpleadoComponent implements OnInit{
  @Input() empleadosLista: empleado;
  @Input() indice: number;

  volverHome(){
    this.router.navigate(['empleados']);
  }
  

  empleados: empleado[];
  cuadroNombre: string ="";
  cuadroApellido: string ="";
  cuadroCargo: string ="";
  cuadroSalario: number;
  cuadroFechaNacimiento: Date;
  cuadroSexo: string = "";
  estadoEmpleado: boolean = true;

  maxDate: string;
  accion: number;

  constructor(private router: Router, private empleadosService: empleadosService, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.accion = parseInt(this.route.snapshot.queryParams['accion']);
      this.indice = this.route.snapshot.params['id'];
      let empleado: empleado = this.empleadosService.encontrar_empleado(this.indice);
      this.cuadroNombre          = empleado.nombreEmpleado;
      this.cuadroApellido        = empleado.apellidoEmpleado;
      this.cuadroCargo           = empleado.cargo;
      this.cuadroSalario         = empleado.salario;
      this.cuadroFechaNacimiento = empleado.fechaNacimiento;
      this.cuadroSexo            = empleado.sexo;
  }


  accion_empleado(){

    if (this.accion == 1) {
      let miEmpleado = new empleado (
                                      this.cuadroNombre,
                                      this.cuadroApellido,
                                      this.cuadroCargo,
                                      this.cuadroSalario,
                                      this.cuadroFechaNacimiento,
                                      this.cuadroSexo
                              );
        this.empleadosService.actualizar_empleado(this.indice, miEmpleado);
    } else {
      this.empleadosService.eliminar_empleado(this.indice);
    }

    setTimeout(() => {
      this.router.navigate(['empleados']);
      
    }, 500);
  }

}
