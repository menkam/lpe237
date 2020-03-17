import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../../services/config/alert.service';
import {LoadingController, ModalController} from '@ionic/angular';
import {GestionsmomoService} from '../../../../services/gestionsmomo.service';

@Component({
  selector: 'app-modale-espece',
  templateUrl: './modale-espece.page.html',
  styleUrls: ['./modale-espece.page.scss'],
})
export class ModaleEspecePage implements OnInit {

  public totalEspece: number;
  public default10000: number;
  public default5000: number;
  public default2000: number;
  public default1000: number;
  public default500: number;
  public default100: number;
  public default50: number;
  public default25: number;

  constructor(
      public alert: AlertService,
      private navCtrl: NavpageService,
      private modalCtrl: ModalController,
      private gms: GestionsmomoService,
      public loadingController: LoadingController
  ) {
    this.initValue();
    this.totalEspece = this.gms.getTotalDevice();
  }

  ngOnInit() {
  }

  private initValue() {
    this.default10000 = this.gms.getNumberDevise('dixMilles');
    this.default5000 = this.gms.getNumberDevise('cinqMilles');
    this.default2000 = this.gms.getNumberDevise('deuxMilles');
    this.default1000 = this.gms.getNumberDevise('mille');
    this.default500 = this.gms.getNumberDevise('cinqCent');
    this.default100 = this.gms.getNumberDevise('cent');
    this.default50 = this.gms.getNumberDevise('cinquante');
    this.default25 = this.gms.getNumberDevise('vingtCinq');
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async onSubmit(f: NgForm) {
    const loading = await this.loadingController.create({
      message: 'Calcule...'
    });
    await loading.present();
    const value = f.value;
    this.gms.addNumberDevise('dixMilles', value.dixMilles);
    this.gms.addNumberDevise('cinqMilles', value.cinqMilles);
    this.gms.addNumberDevise('deuxMilles', value.deuxMilles);
    this.gms.addNumberDevise('mille', value.mille);
    this.gms.addNumberDevise('cinqCent', value.cinqCent);
    this.gms.addNumberDevise('cent', value.cent);
    this.gms.addNumberDevise('cinquante', value.cinquante);
    this.gms.addNumberDevise('vingtCinq', value.vingtCinq);
    this.totalEspece = this.gms.getTotalDevice();
    loading.dismiss();
  }
}
