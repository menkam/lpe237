import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaleUpdateMomoPageRoutingModule } from './modale-update-momo-routing.module';

import { ModaleUpdateMomoPage } from './modale-update-momo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaleUpdateMomoPageRoutingModule
  ],
  declarations: [ModaleUpdateMomoPage]
})
export class ModaleUpdateMomoPageModule {}
