import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmomoPage } from './tabmomo.page';

const routes: Routes = [
  {
    path: '',
    component: TabmomoPage,
    children: [
      { path: 'tab1', children: [{ path: '', loadChildren: '../comptemomo/comptemomo.module#ComptemomoPageModule' }]},
      { path: 'tab2', children: [{ path: '', loadChildren: '../bilanmomo/bilanmomo.module#BilanmomoPageModule' }]},
      { path: 'tab3', children: [{ path: '', loadChildren: '../bilanmomo/bilanmomo.module#BilanmomoPageModule' }]},
      { path: '', redirectTo: '/gestions/tabmomo/tab1', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmomoPageRoutingModule {}
