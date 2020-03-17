import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertService} from './config/alert.service';
import {EnvService} from './config/env.service';


export interface Config {
  momo: string;
  devise: [];
}
export interface Never {
  date: string;
}
export interface CompteMomo {
  date: string;
  fond: number;
  pret: number;
  espece: string;
  comptemomo: number;
  compteperso: number;
  commission: number;
}

export interface Devise {
  dixMilles: number;
  cinqMilles: number;
  deuxMille: number;
  mille: number;
  cinqCent: number;
  cent: number;
  cinquante: number;
  vingtCinq: number;
}

@Injectable({
  providedIn: 'root'
})
export class GestionsmomoService {

  private tabNumberDevise = {
    dixMilles: 0,
    cinqMilles: 0,
    deuxMilles: 0,
    mille: 0,
    cinqCent: 0,
    cent: 0,
    cinquante: 0,
    vingtCinq: 0
  };
  private tabValeurDvise = {
    dixMilles: 10000,
    cinqMilles: 5000,
    deuxMilles: 2000,
    mille: 1000,
    cinqCent: 500,
    cent: 100,
    cinquante: 50,
    vingtCinq: 25
  };
  private tabCompteMomo = {
    date: '2000-01-01',
    fond: '0',
    pret: '0',
    espece: '0',
    comptemomo: '0',
    compteperso: '0',
    commission: '0'
  };

  public config: Config;

  constructor(
      private http: HttpClient,
      public alert: AlertService,
      private env: EnvService,
  ) { }


  public addNumberDevise(key: string, value: any) {
    this.tabNumberDevise[key] = value;
    // return this.tabValeurDvise[key] * this.tabValeurDvise[key];
  }
  public addValCompte(key: string, value: any) {
    this.tabCompteMomo[key] = value;
  }

  public getNumberDevise(key: string): number {
    return this.tabNumberDevise[key];
  }
  public getValDevise(key: string): number {
    return this.tabValeurDvise[key];
  }
  public getValCompte(key: string): number {
    return this.tabCompteMomo[key];
  }

  public initTabNumberDevise() {
    // tslint:disable-next-line:forin
    for (const key in this.tabNumberDevise) {
      this.tabNumberDevise[key] = 0;
    }
  }
  public loadTabNumberDevise(tabNewValue: []) {
    // tslint:disable-next-line:forin
    for (const key in this.tabNumberDevise) {
      this.tabNumberDevise[key] = tabNewValue[key];
    }
  }

  public getTotalDevice(): number {
    let total = 0;
    // tslint:disable-next-line:forin
    for (const key in this.tabValeurDvise) {
      total += this.getNumberDevise(key) * this.getValDevise(key);
    }
    return total;
  }
  public getChaineDevice(): string {
    let chaine = '';
    let count = 0;
    // tslint:disable-next-line:forin
    for (const key in this.tabValeurDvise) {
      if (count === 0) {
        chaine = this.tabNumberDevise[key];
      } else {
        chaine = chaine + ':' + this.tabNumberDevise[key];
      }
      count++;
    }
    return chaine;
  }

  listMomo() {
    return this.http.get<Config>(this.env.API_URL + 'getListMomo');
    /* '../../../../assets/data/momo.json'*/
  }

  // @ts-ignore
  sendCompteMomo(type: string, data: CompteMomo): Observable {
    let methode: string;
    if (type === 'new') {
      methode = 'newCompteMomo';
    } else {
      if (type === 'update') {
        methode = 'updateCompteMomo';
      }
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.env.API_URL + methode + '/' + data.date + '/' + data.fond + '/' + data.pret + '/' + data.espece + '/' + data.comptemomo + '/' + data.compteperso + '/' + data.commission);
  }

  getCompteMomo(id: number) {
    this.http.get<Config>(this.env.API_URL + 'getInfoCompte/' + id).subscribe(sol => {
      const tabCM = sol.momo;
      this.loadTabNumberDevise(sol.devise);
      // tslint:disable-next-line:forin
      for (const key in this.tabCompteMomo) {
        this.tabCompteMomo[key] = tabCM[key];
      }
    }, error1 => {
      this.alert.presentToast(error1.toString());
    });
    return this.tabCompteMomo;
  }

  trie(tab: []) {
    // tslint:disable-next-line:only-arrow-functions
    tab.sort(function(a, b) {
      // @ts-ignore
      return b.id - a.id;
    });
    return tab;
  }
}
