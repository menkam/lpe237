import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabmomoPageRoutingModule } from './tabmomo-routing.module';

import { TabmomoPage } from './tabmomo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabmomoPageRoutingModule
  ],
  declarations: [TabmomoPage]
})
export class TabmomoPageModule {}
