import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaleEspecePageRoutingModule } from './modale-espece-routing.module';

import { ModaleEspecePage } from './modale-espece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaleEspecePageRoutingModule
  ],
  declarations: [ModaleEspecePage]
})
export class ModaleEspecePageModule {}
