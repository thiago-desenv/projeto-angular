import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MeuSegundoComponenteComponent } from './meu-segundo-componente/meu-segundo-componente.component';

const routes: Routes = [
  {
    path: 'meu-componente',
    component: MeuComponenteComponent
  },
  {
    path: 'meu-segundo-componente',
    component: MeuSegundoComponenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
