import { Injectable } from '@angular/core';
import { UtilsService } from '../utils/utils.service';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Request, RequestOptions,Headers,Response, ResponseContentType } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  host: string ='';
  formData: any ={
    email: "",
    password: ""
  }
  constructor(public http: HttpClient, public util: UtilsService) { 
    this.host = util.getBaseUrl();
  }

  registerConnexionUser(email,password,host){
    const urlheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
   
    console.log('I am register service',host)
    this.formData.email =email;
    this.formData.password = password;
    console.log(this.formData,'formdata');
    console.log(host+'api/Users')
    console.log('http://api.dev.connexionht.com/api/Users',this.formData,{headers:urlheaders})
    return this.http.post('http://api.dev.connexionht.com/api/Users',this.formData,{headers:urlheaders})
  }
}
