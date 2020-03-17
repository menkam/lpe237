import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ModalController, NavController} from '@ionic/angular';
import { AlertService } from 'src/app/services/config/alert.service';
import {AuthenticationService} from '../../services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
      private modalController: ModalController,
      private authService: AuthenticationService,
      private alertService: AlertService,
      private navCtrl: NavController
  ) {
  }

  /*login(form: NgForm) {
    // this.authService.login();
    this.alert.presentToast('you are logged');
  }*/

  ngOnInit() {
  }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    /*this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();*/
    this.navCtrl.navigateForward('/register');
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
        data => {
          this.alertService.presentToast('Logged In');
        },
        error => {
          console.log(error);
        },
        () => {
          this.dismissLogin();
          this.navCtrl.navigateRoot('/dashboard');
        }
    );
  }
}
