import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabcahetPageRoutingModule } from './tabcahet-routing.module';

import { TabcahetPage } from './tabcahet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabcahetPageRoutingModule
  ],
  declarations: [TabcahetPage]
})
export class TabcahetPageModule {}
