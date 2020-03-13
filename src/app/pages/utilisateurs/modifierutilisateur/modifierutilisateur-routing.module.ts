import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierutilisateurPage } from './modifierutilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierutilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierutilisateurPageRoutingModule {}
