import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnellePage } from './personnelle.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnellePageRoutingModule {}
