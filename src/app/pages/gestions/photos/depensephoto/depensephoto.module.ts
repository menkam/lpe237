import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepensephotoPageRoutingModule } from './depensephoto-routing.module';

import { DepensephotoPage } from './depensephoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepensephotoPageRoutingModule
  ],
  declarations: [DepensephotoPage]
})
export class DepensephotoPageModule {}
