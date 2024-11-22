import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { combo } from '../../modelos/nuevo-combo.models';
import { combosService } from '../../servicios/combos/combos.service';
import { ServicioAlertaService } from '../../servicios/servicio-alerta.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-combos-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [ServicioAlertaService],
  templateUrl: './combos-component.component.html',
  styleUrl: './combos-component.component.css'
})
export class CombosComponentComponent implements OnInit{
  @Input() combosLista: combo;
  @Input() indice: number;

  titulo = 'Combos';

  combos: combo[];
  cuadroNombre: string = "";
  cuadroCostoCombo: number = 0;
  cuadroFecha: Date;
  cuadroDescripcion: string = "";
  estadoCombo: boolean = false;
  minDate: string;
  maxDate: string;

  constructor (private miAlerta: ServicioAlertaService, private combosService: combosService){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    this.minDate = `${year}-${month}-${day}`;
    this.maxDate = `${year}-${month}-${day}`;

    this.cuadroFecha = new Date(this.minDate);
  }
  
  ngOnInit(): void {
    this.combosService.obtener_combos().subscribe(
      misCombos => {
        console.log(misCombos);
        this.combos = Object.values(misCombos);
        this.combosService.set_combos(this.combos);
      }
    );    
  }

  guardar_combo(){
    let miCombo = new combo(this.cuadroNombre, 
                            this.cuadroCostoCombo, 
                            this.cuadroFecha, 
                            this.cuadroDescripcion);
    this.combosService.agregar_combo_servicio(miCombo);

    this.cuadroNombre="";
    this.cuadroCostoCombo=0;
    this.cuadroFecha;
    this.cuadroDescripcion="";

  }

  limpiarFormulario(formulario: any) {
    formulario.resetForm();
  }

}
