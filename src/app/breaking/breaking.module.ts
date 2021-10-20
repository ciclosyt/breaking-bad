import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BreakingRoutingModule } from './breaking-routing.module';
import { BadCardComponent } from './components/bad-card/bad-card.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    BadCardComponent,
    ListadoComponent,
    PersonajeComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule,
    BreakingRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class BreakingModule { }
