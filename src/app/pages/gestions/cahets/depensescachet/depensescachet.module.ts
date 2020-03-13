import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepensescachetPageRoutingModule } from './depensescachet-routing.module';

import { DepensescachetPage } from './depensescachet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepensescachetPageRoutingModule
  ],
  declarations: [DepensescachetPage]
})
export class DepensescachetPageModule {}
