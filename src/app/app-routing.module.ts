import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './breaking/pages/listado/listado.component';
import { PersonajeComponent } from './breaking/pages/personaje/personaje.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path:'breaking',
    loadChildren: () => import('./breaking/breaking.module').then(m => m.BreakingModule)
  },
  {
    path:'**',
    redirectTo: 'breaking'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
