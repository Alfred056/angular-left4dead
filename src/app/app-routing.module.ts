import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ReglasComponent } from './pages/reglas/reglas.component';
import { EquiposComponent } from './pages/equipos/equipos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'reglas', component: ReglasComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: '**', redirectTo: '' } // redirección si no existe la ruta
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
