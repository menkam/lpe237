import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController} from '@ionic/angular';
import { AlertService } from 'src/app/services/config/alert.service';
import {AuthenticationService} from '../../services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
      private authService: AuthenticationService,
      private alert: AlertService,
      private navCtrl: NavController
  ) {
  }

  /*login(form: NgForm) {
    // this.authService.login();
    this.alert.presentToast('you are logged');
  }*/

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login();
    this.navCtrl.navigateForward('/dashboard');
    this.alert.presentToast('you are logged');
  }
}
