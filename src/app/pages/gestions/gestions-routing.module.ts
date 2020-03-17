import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabmomo', pathMatch: 'full' },
  { path: 'tabperso', loadChildren: () => import('./personnelle/personnelle.module').then( m => m.PersonnellePageModule) },
  { path: 'tabphoto', loadChildren: () => import('./photos/tabphoto/tabphoto.module').then( m => m.TabphotoPageModule) },
  { path: 'tabmomo', loadChildren: () => import('./momos/tabmomo/tabmomo.module').then( m => m.TabmomoPageModule) },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class GestionsRoutingModule { }
