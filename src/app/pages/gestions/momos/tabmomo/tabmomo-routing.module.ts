import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmomoPage } from './tabmomo.page';

const routes: Routes = [
  {
    path: '',
    component: TabmomoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmomoPageRoutingModule {}
