import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifiergroupeutilisateurPageRoutingModule } from './modifiergroupeutilisateur-routing.module';

import { ModifiergroupeutilisateurPage } from './modifiergroupeutilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifiergroupeutilisateurPageRoutingModule
  ],
  declarations: [ModifiergroupeutilisateurPage]
})
export class ModifiergroupeutilisateurPageModule {}
