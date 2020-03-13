import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnregistrerPage } from './enregistrer.page';

const routes: Routes = [
  {
    path: '',
    component: EnregistrerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnregistrerPageRoutingModule {}
