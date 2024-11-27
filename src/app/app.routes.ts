import { Routes } from '@angular/router';
import { HomeComponentComponent } from './componentes/home-component/home-component.component';
import { CombosComponentComponent } from './componentes/combos-component/combos-component.component';
import { EmpleadosComponentComponent } from './componentes/empleados-component/empleados-component.component';
import { ErrorPersonalizadoComponent } from './componentes/error-personalizado/error-personalizado.component';
import { OrdenesPadreComponent } from './componentes/ordenes-padre/ordenes-padre.component';
import { ActualizaComboComponent } from './componentes/actualiza-combo/actualiza-combo.component';
import { ActualizaOrdenComponent } from './componentes/actualiza-orden/actualiza-orden.component';
import { ActualizaEmpleadoComponent } from './componentes/actualiza-empleado/actualiza-empleado.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginGuardian } from './componentes/login/login-guardian';
import { RegistroComponent } from './componentes/registro/registro.component';

export const routes: Routes = [
  {path: "", component: HomeComponentComponent, canActivate:[LoginGuardian]},
  {path: "ordenes", component: OrdenesPadreComponent, canActivate:[LoginGuardian]},
  {path: "combos", component: CombosComponentComponent, canActivate:[LoginGuardian]},
  {path: "empleados", component: EmpleadosComponentComponent, canActivate:[LoginGuardian]},
  {path: "actualizaOrden/:id", component: ActualizaOrdenComponent, canActivate:[LoginGuardian]},
  {path: "ordenes/actualizaOrden/:id", component: ActualizaOrdenComponent, canActivate:[LoginGuardian]},
  {path: "combos/actualizaCombo/:id", component: ActualizaComboComponent, canActivate:[LoginGuardian]},
  {path: "empleados/actualizaEmpleado/:id", component: ActualizaEmpleadoComponent, canActivate:[LoginGuardian]},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "**", component: ErrorPersonalizadoComponent}
];
