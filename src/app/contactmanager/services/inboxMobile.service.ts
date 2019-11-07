import { mobile } from './../models/mobile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alarma } from '../models/alarmas';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class mobileService {

  
  constructor(private http: HttpClient) { }

  inboxUrl = 'http://localhost:8080/selfcare/inboxMobile/';
 

  getEmailId(id: String): Observable<alarma> {
    return this.http.get<alarma>(this.inboxUrl+id)
  }
  
  EnviarEmail(message: mobile ) : Observable<mobile>{
    const Url = 'http://localhost:8080/selfcare/email';
    return this.http.post<mobile>(Url,message);
  }
 // return this.http.post('http://10.0.1.19/login',{email, password}, {responseType: 'text'})



}