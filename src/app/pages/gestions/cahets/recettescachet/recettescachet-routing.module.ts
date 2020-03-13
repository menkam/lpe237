import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettescachetPage } from './recettescachet.page';

const routes: Routes = [
  {
    path: '',
    component: RecettescachetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettescachetPageRoutingModule {}
