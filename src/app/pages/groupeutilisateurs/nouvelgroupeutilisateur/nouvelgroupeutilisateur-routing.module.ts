import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelgroupeutilisateurPage } from './nouvelgroupeutilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelgroupeutilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelgroupeutilisateurPageRoutingModule {}
