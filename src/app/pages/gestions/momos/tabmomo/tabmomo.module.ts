import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabmomoPageRoutingModule } from './tabmomo-routing.module';

import { TabmomoPage } from './tabmomo.page';
import {ModaleEspecePage} from '../modale-espece/modale-espece.page';
import {ModaleUpdateMomoPage} from '../modale-update-momo/modale-update-momo.page';

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
