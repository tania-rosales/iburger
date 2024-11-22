import { Component, Input } from '@angular/core';
import { orden } from '../../modelos/nueva-orden.models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {
  @Input() ordenesLista: orden;
  @Input() indice: number;
}
