import { Injectable } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavpageService {

  private data: any;

  constructor(
      private navCtrl: NavController,
      private modalCtrl: ModalController
  ) { }

  public push(url: string, data: any = '') {
    this.data = data;
    this.navCtrl.navigateForward('/' + url);
  }

  public pop(url: string) {
    this.navCtrl.navigateBack('/' + url);
  }

  get(key: string) {
    return this.data[key];
  }
}
