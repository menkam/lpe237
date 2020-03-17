import { Component, OnInit } from '@angular/core';
import {GestionsmomoService} from '../../../../services/gestionsmomo.service';
import {LoadingController, ModalController} from '@ionic/angular';
import {AlertService} from '../../../../services/config/alert.service';
import {ModaleUpdateMomoPage} from '../modale-update-momo/modale-update-momo.page';

@Component({
  selector: 'app-bilanmomo',
  templateUrl: './bilanmomo.page.html',
  styleUrls: ['./bilanmomo.page.scss'],
})
export class BilanmomoPage implements OnInit {

  public columns: any;
  public rows: any;
  bodyTable: any;
  headTable = ['Date', 'Fond', 'Prêt', 'Espèce', 'Compte', 'Commission', 'TotalEC', 'MargeEC.', 'DiffCom', 'Supplement', 'Statut', 'Action'];
  constructor(
      private gms: GestionsmomoService,
      public loadingController: LoadingController,
      public alert: AlertService,
      private modalCtrl: ModalController,
  ) {
    this.loadBilan();
  }
  async loadBilan() {
    const loading = await this.loadingController.create({
      message: 'Chargement...'
    });
    await loading.present();
    this.gms.listMomo().subscribe((data) => {
      // this.rows = data.momo;
      // @ts-ignore
      this.bodyTable = this.gms.trie(data.momo);
      loading.dismiss();
    }, error1 => {
      loading.dismiss();
      this.alert.presentToast('erreur');
    });
  }
  async ngOnInit() {}

  async updateBilanMomo(id: number) {
    const modal = await this.modalCtrl.create({
      component: ModaleUpdateMomoPage,
      componentProps: { id }
    });
    return await modal.present();
  }
  ionRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');

      // complete()  signify that the refreshing has completed and to close the refresher
      event.target.complete();
    }, 2000);
  }
  ionPull(event) {
    // Emitted while the user is pulling down the content and exposing the refresher.
    this.gms.listMomo().subscribe((data) => {
      // @ts-ignore
      this.bodyTable = this.gms.trie(data.momo);
    }, error1 => {
      this.alert.presentToast('erreur de connexion');
    });
    // console.log('ionPull Event Triggered!');
  }
  ionStart(event) {
    // Emitted when the user begins to start pulling down.
    // console.log('ionStart Event Triggered!');
  }

  /**
   * Déclenché lorsque le routage du composant pour afficher la vue est prêt.
   */
  ionViewWillEnter() {
  }
  /**
   * Déclenché lorsque le routage du composant a fini d'être exécuté.
   */
  ionViewDidEnter() {
    this.loadBilan();
  }
  /**
   * Déclenché lorsque le routage du composant est entrain d'être exécuté.
   */
  ionViewWillLeave() {
  }
  /**
   * Déclenché lorsque le routage du composant a fini d'être exécuté.
   */
  ionViewDidLeave() {
  }
}

