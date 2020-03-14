import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    private _TOKEN_KEY = '';

    authenticationState = new BehaviorSubject(false);

    constructor(
        private navCtrl: NavController
    ) { }

    login() {
         this.setTOKEN_KEY('1234567');
         this.authenticationState.next(true);
    }

    logout() {
        this.setTOKEN_KEY('');
        this.authenticationState.next(false);
        this.navCtrl.navigateRoot('/welcome');
    }

    isAuthenticated() {
        return this.authenticationState.value;
    }

    getTOKEN_KEY(): string {
        return this._TOKEN_KEY;
    }

    setTOKEN_KEY(value: string) {
        this._TOKEN_KEY = value;
    }
}
