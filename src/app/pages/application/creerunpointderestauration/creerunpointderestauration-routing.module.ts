import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerunpointderestaurationPage } from './creerunpointderestauration.page';

const routes: Routes = [
  {
    path: '',
    component: CreerunpointderestaurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerunpointderestaurationPageRoutingModule {}
