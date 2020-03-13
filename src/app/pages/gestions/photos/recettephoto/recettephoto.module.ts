import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettephotoPageRoutingModule } from './recettephoto-routing.module';

import { RecettephotoPage } from './recettephoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettephotoPageRoutingModule
  ],
  declarations: [RecettephotoPage]
})
export class RecettephotoPageModule {}
