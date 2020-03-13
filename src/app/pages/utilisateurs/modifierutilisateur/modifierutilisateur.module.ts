import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierutilisateurPageRoutingModule } from './modifierutilisateur-routing.module';

import { ModifierutilisateurPage } from './modifierutilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierutilisateurPageRoutingModule
  ],
  declarations: [ModifierutilisateurPage]
})
export class ModifierutilisateurPageModule {}
