import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurerapplicationPageRoutingModule } from './restaurerapplication-routing.module';

import { RestaurerapplicationPage } from './restaurerapplication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurerapplicationPageRoutingModule
  ],
  declarations: [RestaurerapplicationPage]
})
export class RestaurerapplicationPageModule {}
