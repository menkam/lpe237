import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaleEspecePageRoutingModule } from './modale-espece-routing.module';

import { ModaleEspecePage } from './modale-espece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaleEspecePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModaleEspecePage]
})
export class ModaleEspecePageModule {}
