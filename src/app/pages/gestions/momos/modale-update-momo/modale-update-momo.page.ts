import { Component, OnInit } from '@angular/core';
import {TabmomoPage} from '../tabmomo/tabmomo.page';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GestionsmomoService} from '../../../../services/gestionsmomo.service';
import {LoadingController, ModalController, NavParams} from '@ionic/angular';
import {AlertService} from '../../../../services/config/alert.service';
import {ModaleEspecePage} from '../modale-espece/modale-espece.page';

@Component({
  selector: 'app-modale-update-momo',
  templateUrl: './modale-update-momo.page.html',
  styleUrls: ['./modale-update-momo.page.scss'],
})
export class ModaleUpdateMomoPage extends TabmomoPage implements OnInit {
  formCompte: FormGroup;
  submitAttempt: boolean;
  totalEspece: number;
  infoMomo: any;

  constructor(
      public formBuilde: FormBuilder,
      private ms: GestionsmomoService,
      public loadingController: LoadingController,
      public alert: AlertService,
      private modalCtrl: ModalController,
      private gms: GestionsmomoService,
      private np: NavParams,
  ) {
    super();
    this.submitAttempt = false;
    this.initValue();
    this.getVal();
    this.formCompte = this.formBuilde.group({
      date: ['', Validators.compose([Validators.required])],
      fond: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      pret: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      espece: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      comptemomo: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      compteperso: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      commission: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
    });
  }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async onClickEspece() {
    const modal = await this.modalCtrl.create({
      component: ModaleEspecePage
    });
    return await modal.present();
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

  async onSubmitFormUpdateCompte() {
    const loading = await this.loadingController.create({
      message: 'Enregistrement...'
    });
    await loading.present();
    const value = this.formCompte.value;


    this.gms.sendCompteMomo('update', {
      date: value.date,
      fond: value.fond,
      pret: value.pret,
      espece: this.gms.getChaineDevice(),
      comptemomo: value.comptemomo,
      compteperso: value.compteperso,
      commission: value.commission
    }).subscribe(response => {
      if (response === 1) {
        this.alert.presentToast('C\'ette date n\'existe pas!!!');
      } else if (response === 2) {
        this.dismissModal();
        this.gms.initTabNumberDevise();
        this.alert.presentToast('Modification effectué avec success.');
      } else {
        this.alert.presentToast('Erreur interne du serveur!!!');
      }
      loading.dismiss();
    }, error1 => {
      loading.dismiss();
      this.alert.presentToast('ERREUR!!!');
    });
  }

  async initValue() {
    const loading = await this.loadingController.create({
      message: 'Initialisation...'
    });
    this.infoMomo = this.gms.getCompteMomo(this.np.get('id'));
    await loading.present();
    loading.dismiss();
  }
}
