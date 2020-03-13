import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelutilisateurPageRoutingModule } from './nouvelutilisateur-routing.module';

import { NouvelutilisateurPage } from './nouvelutilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelutilisateurPageRoutingModule
  ],
  declarations: [NouvelutilisateurPage]
})
export class NouvelutilisateurPageModule {}
