import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilanphotoPage } from './bilanphoto.page';

const routes: Routes = [
  {
    path: '',
    component: BilanphotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilanphotoPageRoutingModule {}
