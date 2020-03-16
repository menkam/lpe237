import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/auth/authentication.service';
import {MenuController} from '@ionic/angular';
import {User} from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User;

  constructor(private menu: MenuController, private authService: AuthenticationService) {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  /*ionViewWillEnter() {
    this.authService.user().subscribe(
        user => {
          this.user = user;
        }
    );
  }*/
}
