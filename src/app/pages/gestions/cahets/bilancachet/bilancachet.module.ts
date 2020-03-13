import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilancachetPageRoutingModule } from './bilancachet-routing.module';

import { BilancachetPage } from './bilancachet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilancachetPageRoutingModule
  ],
  declarations: [BilancachetPage]
})
export class BilancachetPageModule {}
