import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnellePageRoutingModule } from './personnelle-routing.module';

import { PersonnellePage } from './personnelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnellePageRoutingModule
  ],
  declarations: [PersonnellePage]
})
export class PersonnellePageModule {}
