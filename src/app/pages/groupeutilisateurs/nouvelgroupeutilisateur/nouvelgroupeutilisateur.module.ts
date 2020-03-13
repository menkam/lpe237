import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelgroupeutilisateurPageRoutingModule } from './nouvelgroupeutilisateur-routing.module';

import { NouvelgroupeutilisateurPage } from './nouvelgroupeutilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelgroupeutilisateurPageRoutingModule
  ],
  declarations: [NouvelgroupeutilisateurPage]
})
export class NouvelgroupeutilisateurPageModule {}
