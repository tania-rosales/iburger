import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrdenesComponent } from '../ordenes/ordenes.component'; 
import { orden } from '../../modelos/nueva-orden.models';
import { ordenesService } from '../../servicios/ordenes/ordenes.service';
import { ServicioAlertaService } from '../../servicios/servicio-alerta.service';

@Component({
  selector: 'app-ordenes-padre',
  standalone: true,
  imports: [CommonModule, OrdenesComponent],
  providers: [ServicioAlertaService],
  templateUrl: './ordenes-padre.component.html',
  styleUrl: './ordenes-padre.component.css'
})
export class OrdenesPadreComponent implements OnInit{
  ordenes:orden[];
  constructor (private miAlerta: ServicioAlertaService, private ordenesService:ordenesService){
  }
  
  ngOnInit(): void {
    this.ordenesService.obtener_ordenes().subscribe(
      misOrdenes => {
        console.log(misOrdenes);
        this.ordenes = Object.values(misOrdenes);
        this.ordenesService.set_ordenes(this.ordenes);
      }
    );    
  }

}
