import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabphotoPage } from './tabphoto.page';

const routes: Routes = [
  {
    path: '',
    component: TabphotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabphotoPageRoutingModule {}
