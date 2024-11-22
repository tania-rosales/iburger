import { Routes } from '@angular/router';
import { HomeComponentComponent } from './componentes/home-component/home-component.component';
import { CombosComponentComponent } from './componentes/combos-component/combos-component.component';
import { EmpleadosComponentComponent } from './componentes/empleados-component/empleados-component.component';
import { ErrorPersonalizadoComponent } from './componentes/error-personalizado/error-personalizado.component';
import { OrdenesPadreComponent } from './componentes/ordenes-padre/ordenes-padre.component';
import { ActualizaComboComponent } from './componentes/actualiza-combo/actualiza-combo.component';
import { ActualizaOrdenComponent } from './componentes/actualiza-orden/actualiza-orden.component';

export const routes: Routes = [
  {path: "", component: HomeComponentComponent},
  {path: "ordenes", component: OrdenesPadreComponent},
  {path: "combos", component: CombosComponentComponent},
  {path: "empleados", component: EmpleadosComponentComponent},
  {path: "actualizaOrden/:id", component: ActualizaOrdenComponent},
  {path: "actualizaCombo/:id", component: ActualizaComboComponent},
  {path: "**", component: ErrorPersonalizadoComponent}
];
