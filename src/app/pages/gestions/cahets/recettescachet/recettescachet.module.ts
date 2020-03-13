import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettescachetPageRoutingModule } from './recettescachet-routing.module';

import { RecettescachetPage } from './recettescachet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettescachetPageRoutingModule
  ],
  declarations: [RecettescachetPage]
})
export class RecettescachetPageModule {}
