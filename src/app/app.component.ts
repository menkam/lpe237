import { Component } from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthenticationService} from './services/auth/authentication.service';
import {AlertService} from './services/config/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // laisser la barre d'état superposer la vue Web
      this.statusBar.overlaysWebView(true);
      // définir la barre d'état sur bleu
      this.statusBar.backgroundColorByHexString('#0000FF');
      /*this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.navCtrl.navigateRoot('/dashboard');
        } else {
          this.navCtrl.navigateRoot('/welcome');
        }
      });*/
    });
  }

  // When Logout Button is pressed
  logout() {
    this.authService.logout().subscribe(
        data => {
          this.alertService.presentToast(data['message']);
        },
        error => {
          console.log(error);
        },
        () => {
          this.navCtrl.navigateRoot('/landing');
        }
    );
  }
  exitApp() {

  }

  selectReseau() {

  }
}
