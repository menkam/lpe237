import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptemomoPageRoutingModule } from './comptemomo-routing.module';

import { ComptemomoPage } from './comptemomo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptemomoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ComptemomoPage]
})
export class ComptemomoPageModule {}
