import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettephotoPage } from './recettephoto.page';

const routes: Routes = [
  {
    path: '',
    component: RecettephotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettephotoPageRoutingModule {}
