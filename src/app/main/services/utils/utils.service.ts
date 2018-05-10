import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  host: string = 'https://api.dev.connexionht.com/';
  constructor(public http: HttpClient) { }

  getBaseUrl(){
    return this.host;
  }
}
