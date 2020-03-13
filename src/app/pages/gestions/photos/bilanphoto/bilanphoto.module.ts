import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilanphotoPageRoutingModule } from './bilanphoto-routing.module';

import { BilanphotoPage } from './bilanphoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilanphotoPageRoutingModule
  ],
  declarations: [BilanphotoPage]
})
export class BilanphotoPageModule {}
