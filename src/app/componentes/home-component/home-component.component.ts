import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { OrdenesComponent } from '../ordenes/ordenes.component'; 
import { orden } from '../../modelos/nueva-orden.models';
import { ordenesService } from '../../servicios/ordenes/ordenes.service';
import { ServicioAlertaService } from '../../servicios/servicio-alerta.service';
import { combo } from '../../modelos/nuevo-combo.models';
import { combosService } from '../../servicios/combos/combos.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, FormsModule, OrdenesComponent],
  providers: [ServicioAlertaService, combosService],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{
  title = "Nueva Orden iBurger";

  ordenes:orden[];
  combos: combo[];
  cuadroNombreCombo: string = "";
  cuadroCosto: number = 0;
  cuadroVendedor: string = "";
  cuadroCliente: string = "";
  cuadroFecha: Date;
  cuadroPropina: number = 0;
  estadoOrden: boolean = false;
  minDate: string;
  maxDate: string;
  comboSeleccionado: string="";
  indice: number;
  mostrarInputCosto: boolean;
  
  constructor (private miAlerta: ServicioAlertaService, private ordenesService:ordenesService, private combosService: combosService){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    this.minDate = `${year}-${month}-${day}`;
    this.maxDate = `${year}-${month}-${day}`;

    this.cuadroFecha = new Date(this.minDate);
  }
  
  ngOnInit(): void {
    this.ordenesService.obtener_ordenes().subscribe(
      misOrdenes => {
        console.log(misOrdenes);
        this.ordenes = Object.values(misOrdenes);
        this.ordenesService.set_ordenes(this.ordenes);
      }
    );    
    
    this.lista_combo();
    
  }

  guardar_orden(){
    let miOrden = new orden(
                              this.cuadroNombreCombo, 
                              this.cuadroCosto, 
                              this.cuadroVendedor, 
                              this.cuadroCliente, 
                              this.cuadroFecha, 
                              this.cuadroPropina,
                              this.estadoOrden
                            );

    this.ordenesService.agregar_orden_servicio(miOrden);
    this.cuadroNombreCombo = "";
    this.cuadroCosto = 0;
    this.cuadroVendedor = "";
    this.cuadroCliente = "";
    this.cuadroFecha;
    this.cuadroPropina = 0;
    this.estadoOrden;
  }

  limpiarFormulario(formulario: any) {
    formulario.resetForm();
  }

  lista_combo(){
    this.combosService.obtener_combos().subscribe(
      listaCombo => {
        this.combos = Object.values(listaCombo);
        this.combosService.set_combos(this.combos)
      }
    )
  }

  onComboChange (event: any) {
    const selectedIndex = event.target.selectedIndex;
    const comboSeleccionado = this.combosService.encontrar_combo(this.indice = selectedIndex)
    if (comboSeleccionado){
      this.cuadroCosto = comboSeleccionado.costo
      this.mostrarInputCosto = true
    } else {
      this.cuadroCosto = 0;
      this.mostrarInputCosto = false;
    }
  }

}
