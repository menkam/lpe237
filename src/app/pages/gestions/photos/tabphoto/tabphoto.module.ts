import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabphotoPageRoutingModule } from './tabphoto-routing.module';

import { TabphotoPage } from './tabphoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabphotoPageRoutingModule
  ],
  declarations: [TabphotoPage]
})
export class TabphotoPageModule {}
