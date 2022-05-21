import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FormularioDonacionesComponent } from './componente/formulario-donaciones/formulario-donaciones.component';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { Vista4Component } from './componente/vista4/vista4.component';
import { BarraComponent } from './componente/barra/barra.component';

//*Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
//*Formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioDonacionesComponent,
    CalculadoraComponent,
    Vista4Component,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
