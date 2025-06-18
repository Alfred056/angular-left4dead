import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ReglasComponent } from './pages/reglas/reglas.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { NavComponent } from './component/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ReglasComponent,
    EquiposComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
