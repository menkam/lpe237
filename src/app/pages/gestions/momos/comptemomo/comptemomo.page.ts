import { Component, OnInit } from '@angular/core';
import {ModaleEspecePage} from '../modale-espece/modale-espece.page';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController} from '@ionic/angular';
import {GestionsmomoService} from '../../../../services/gestionsmomo.service';
import {NavpageService} from '../../../../services/config/navpage.service';
import {AlertService} from '../../../../services/config/alert.service';
import {TabmomoPage} from '../tabmomo/tabmomo.page';

export interface CompteMomo {
  date: string;
  pret: number;
  espece: string;
  comptemomo: number;
  compteperso: number;
  commission: number;
}

@Component({
  selector: 'app-comptemomo',
  templateUrl: './comptemomo.page.html',
  styleUrls: ['./comptemomo.page.scss'],
})
export class ComptemomoPage  extends TabmomoPage implements OnInit {

  public formCompte: FormGroup;
  public submitAttempt: boolean;
  public totalEspece: number;
  public defaultPret = 0;
  public defaultComptePerso = 0;

  constructor(
      public formBuilder: FormBuilder,
      public alert: AlertService,
      private navCtrl: NavpageService,
      private modalCtrl: ModalController,
      private gms: GestionsmomoService,
      public loadingController: LoadingController
  ) {
    super();
    this.submitAttempt = false;
    this.gms.initTabNumberDevise();

    this.formCompte = this.formBuilder.group({
      date: ['', Validators.compose([Validators.required])],
      pret: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      espece: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      comptemomo: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      compteperso: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      commission: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
    });

  }

  ngOnInit() {
  }

  async getVal() {
    const loading = await this.loadingController.create({
      message: 'Chargement...'
    });
    await loading.present();
    const total = this.gms.getTotalDevice();
    setTimeout('', 9000);
    if (total) {
      this.totalEspece = total;
      loading.dismiss();
    } else {
      this.alert.presentToast('Aucune valeur trouvée');
      loading.dismiss();
    }
  }


  async onSubmitFormCompte() {
    const loading = await this.loadingController.create({
      message: 'Enregistrement...'
    });
    await loading.present();
    const value = this.formCompte.value;

    this.gms.sendCompteMomo('new', {
      date: value.date,
      fond: 0,
      pret: value.pret,
      espece: this.gms.getChaineDevice(),
      comptemomo: value.comptemomo,
      compteperso: value.compteperso,
      commission: value.commission
    }).subscribe(response => {
      if (response === 1) {
        this.alert.presentToast('C\'ette date existe déja!!!');
      } else if (response === 2) {
        this.formCompte.reset();
        this.gms.initTabNumberDevise();
        this.alert.presentToast('Enregistrement avec success.');
      } else {
        this.alert.presentToast('Erreur interne du serveur!!!');
      }
      loading.dismiss();
    }, error1 => {
      loading.dismiss();
      this.alert.presentToast('ERREUR!!!');
    });
  }

  async onClickEspece() {
    const modal = await this.modalCtrl.create({
      component: ModaleEspecePage
    });
    return await modal.present();
  }
}
