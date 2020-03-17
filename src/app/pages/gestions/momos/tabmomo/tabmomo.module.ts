import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabmomoPageRoutingModule } from './tabmomo-routing.module';

import { TabmomoPage } from './tabmomo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabmomoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TabmomoPage, ModaleEspecePage, ModaleUpdateMomoPage],
  entryComponents: [ModaleEspecePage, ModaleUpdateMomoPage],
})
export class TabmomoPageModule {}
