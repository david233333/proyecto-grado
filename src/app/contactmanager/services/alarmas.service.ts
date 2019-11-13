import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alarma } from '../models/alarmas';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlarmasService {

  
  constructor(private http: HttpClient) { }

  //inboxUrl = 'http://localhost:8080/selfcare/inboxWeb/';
  inboxUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/inboxWeb/'

  getEmailId(id: String): Observable<alarma> {
    return this.http.get<alarma>(this.inboxUrl+id)
  }
  
  Enviar(alar: alarma ) : Observable<alarma>{
    const Url = 'https://back-selfcareapp.herokuapp.com/selfcare/message';
    return this.http.post<alarma>(Url,alar);
  }



}
