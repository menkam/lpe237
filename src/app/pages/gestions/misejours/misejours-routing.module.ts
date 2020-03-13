import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisejoursPage } from './misejours.page';

const routes: Routes = [
  {
    path: '',
    component: MisejoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisejoursPageRoutingModule {}
