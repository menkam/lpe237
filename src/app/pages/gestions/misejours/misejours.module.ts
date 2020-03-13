import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisejoursPageRoutingModule } from './misejours-routing.module';

import { MisejoursPage } from './misejours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisejoursPageRoutingModule
  ],
  declarations: [MisejoursPage]
})
export class MisejoursPageModule {}
