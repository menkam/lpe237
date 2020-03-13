import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerunpointderestaurationPageRoutingModule } from './creerunpointderestauration-routing.module';

import { CreerunpointderestaurationPage } from './creerunpointderestauration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerunpointderestaurationPageRoutingModule
  ],
  declarations: [CreerunpointderestaurationPage]
})
export class CreerunpointderestaurationPageModule {}
