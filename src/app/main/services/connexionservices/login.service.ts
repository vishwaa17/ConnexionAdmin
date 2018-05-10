import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilsService } from '../utils/utils.service';
import { Request, RequestOptions,Headers,Response, ResponseContentType } from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  host: string;
  formData: any ={
    email: "",
    password: ""
  }
  constructor(public http: HttpClient, public util: UtilsService) { 
    this.host = util.getBaseUrl();
  }
  loginrequest(email,password,host){
    const urlheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
   
    console.log('I am register service',host)
    this.formData.email =email;
    this.formData.password = password;
    console.log(this.formData,'formdata');
    console.log(host+'api/Users')
    return this.http.post('http://api.dev.connexionht.com/api/Users/login',this.formData,{headers:urlheaders})
  }
}
