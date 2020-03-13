import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiergroupeutilisateurPage } from './modifiergroupeutilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ModifiergroupeutilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifiergroupeutilisateurPageRoutingModule {}
