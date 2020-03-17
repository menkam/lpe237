import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmomoPage } from './tabmomo.page';

const routes: Routes = [
  {
    path: '',
    component: TabmomoPage,
    children: [
      { path: 'tab1', loadChildren: () => import('../comptemomo/comptemomo.module').then( m => m.ComptemomoPageModule)},
      { path: 'tab2', loadChildren: () => import('../bilanmomo/bilanmomo.module').then( m => m.BilanmomoPageModule)},
      { path: 'tab3', loadChildren: () => import('../bilanmomo/bilanmomo.module').then( m => m.BilanmomoPageModule)},
      { path: '', redirectTo: '/gestions/tabmomo/tab1', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmomoPageRoutingModule {}
