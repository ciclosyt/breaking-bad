import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path:'listado',
        component: ListadoComponent
      },
      {
        path:':id',
        component: PersonajeComponent
      },
      
      {
        path:'**',
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakingRoutingModule { }
