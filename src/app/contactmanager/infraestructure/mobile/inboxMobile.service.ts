import { mobile } from '../../domain/models/mobile/entity/mobile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alarma } from '../../domain/models/alarmas/entity/alarmas';
import { Observable } from 'rxjs/Observable';
import { mobileGatewayAbstract } from '../../domain/models/mobile/gateway/mobile-gateway.abstract';

@Injectable()
export class mobileService extends mobileGatewayAbstract{
 

  
  constructor(private http: HttpClient) {
    super();
  }

  inboxUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/inboxMobile';
 

  getEmailId(id: String): Observable<alarma> {
    return this.http.get<alarma>(this.inboxUrl+id)
  }

  sendEmail(message: mobile): Observable<mobile> {
    const Url = 'https://back-selfcareapp.herokuapp.com/selfcare/email';
    return this.http.post<mobile>(Url,message);
  }
  
}