import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combo } from '../../modelos/nuevo-combo.models';
import { FormsModule } from '@angular/forms';
import { combosService } from '../../servicios/combos/combos.service';

@Component({
  selector: 'app-actualiza-combo',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './actualiza-combo.component.html',
  styleUrl: './actualiza-combo.component.css'
})
export class ActualizaComboComponent implements OnInit{
  @Input() combosLista: combo;
  @Input() indice: number;

  volverHome(){
    this.router.navigate(['']);
  }

  combos: combo[];
  cuadroNombre: string = "";
  cuadroCostoCombo: number = 0;
  cuadroFecha: Date;
  cuadroDescripcion: string = "";
  estadoCombo: boolean = false;

  accion: number;
  minDate: string;
  maxDate: string;

  constructor(private router: Router, private combosService: combosService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.indice = this.route.snapshot.params['id'];
    let combo: combo = this.combosService.encontrar_combo(this.indice);
    this.cuadroNombre = combo.nombreCombo;
    this.cuadroCostoCombo = combo.costo;
    this.cuadroFecha = combo.fecha;
    this.cuadroDescripcion = combo.descripcion;
  }

  accion_combo(){

    if (this.accion == 1) {
      let miCombo = new combo (
                                this.cuadroNombre, 
                                this.cuadroCostoCombo, 
                                this.cuadroFecha, 
                                this.cuadroDescripcion
                              );
        this.combosService.actualizar_combo(this.indice, miCombo);
    } else {
      this.combosService.eliminar_combo(this.indice);
    }

    setTimeout(() => {
      this.router.navigate(['']);
      
    }, 500);
  }

}
