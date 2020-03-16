import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {AlertService} from '../../services/config/alert.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
      private authService: AuthenticationService,
      private alert: AlertService,
      private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  register(form: NgForm) {

    }

  loginModal() {
    this.navCtrl.navigateForward('/login');
  }
}
