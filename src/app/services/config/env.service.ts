import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  // API_URL = 'http://127.0.0.1:8000/';
  public API_URL = 'http://lpesecours.herokuapp.com/api_';
  public HTTPOPTION = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      '\'Accept\'': 'application/json',
      'Access-Control-Allow-Headers' : 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }),
    withCredentials: true
  };
  constructor() { }
}
