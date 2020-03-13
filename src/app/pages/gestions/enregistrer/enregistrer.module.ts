import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnregistrerPageRoutingModule } from './enregistrer-routing.module';

import { EnregistrerPage } from './enregistrer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnregistrerPageRoutingModule
  ],
  declarations: [EnregistrerPage]
})
export class EnregistrerPageModule {}
