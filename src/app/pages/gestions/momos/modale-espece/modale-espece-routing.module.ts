import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaleEspecePage } from './modale-espece.page';

const routes: Routes = [
  {
    path: '',
    component: ModaleEspecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaleEspecePageRoutingModule {}
