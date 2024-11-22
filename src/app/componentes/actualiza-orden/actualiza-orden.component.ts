import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { orden } from '../../modelos/nueva-orden.models';
import { FormsModule } from '@angular/forms';
import { ordenesService } from '../../servicios/ordenes/ordenes.service';


@Component({
  selector: 'app-actualiza-orden',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './actualiza-orden.component.html',
  styleUrl: './actualiza-orden.component.css'
})
export class ActualizaOrdenComponent implements OnInit{

  volverHome(){
    this.router.navigate(['']);
  }

  ordenes: orden[];
  cuadroNombreCombo: string = "";
  cuadroCosto: number = 0;
  cuadroVendedor: string = "";
  cuadroCliente: string = "";
  cuadroFecha: Date;
  cuadroPropina: number = 0;
  estadoOrden: boolean = false;
  minDate: string;
  maxDate: string;
  indice: number;
  accion: number;

  constructor(private router: Router, private ordenesService: ordenesService, private route: ActivatedRoute){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    this.minDate = `${year}-${month}-${day}`;
    this.maxDate = `${year}-${month}-${day}`;

    this.cuadroFecha = new Date(this.minDate);
  }


  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.indice = this.route.snapshot.params['id'];
    let orden: orden = this.ordenesService.encontrar_orden(this.indice);
    this.cuadroNombreCombo = orden.nombreCombo;
    this.cuadroCosto = orden.costo;
    this.cuadroVendedor = orden.vendedor;
    this.cuadroCliente = orden.cliente;
    this.cuadroFecha = orden.fecha;
    this.cuadroPropina = orden.propina

  }

  accion_orden (){
    if (this.accion == 1) {
      let miOrden = new orden(
                                this.cuadroNombreCombo,
                                this.cuadroCosto,
                                this.cuadroVendedor,
                                this.cuadroCliente,
                                this.cuadroFecha,
                                this.cuadroPropina,
                                this.estadoOrden
                              );

        this.ordenesService.actualizar_orden(this.indice, miOrden);
    } else {
      this.ordenesService.eliminar_orden(this.indice);
    }

    setTimeout(() => {
      this.router.navigate(['']);
      
    }, 500);

  } /* Fin accion_orden */
}
