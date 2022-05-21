import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { FormularioDonacionesComponent } from './componente/formulario-donaciones/formulario-donaciones.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { Vista4Component } from './componente/vista4/vista4.component';

const routes: Routes = [
  {path:'Calculadora', component:CalculadoraComponent},
  {path:'Formulario', component: FormularioDonacionesComponent},
  {path:'', component:InicioComponent},
  {path:'Inicio', component:InicioComponent},
  {path:'Dinosaurios', component:Vista4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
