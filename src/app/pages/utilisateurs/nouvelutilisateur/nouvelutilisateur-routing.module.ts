import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelutilisateurPage } from './nouvelutilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelutilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelutilisateurPageRoutingModule {}
