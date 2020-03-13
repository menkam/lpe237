import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilanmomoPageRoutingModule } from './bilanmomo-routing.module';

import { BilanmomoPage } from './bilanmomo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilanmomoPageRoutingModule
  ],
  declarations: [BilanmomoPage]
})
export class BilanmomoPageModule {}
