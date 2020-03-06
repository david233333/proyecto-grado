import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alarma } from '../../domain/models/alarmas/entity/alarmas';
import { Observable } from 'rxjs/Observable';
import { alarmsGatewayAbstract } from '../../domain/models/alarmas/gateway/alarmas-gateway.abstract';

@Injectable()
export class AlarmasService extends alarmsGatewayAbstract {
  
  
  
  constructor(private http: HttpClient) {
    super();
  }

  inboxUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/inboxWeb/'

  getEmailId(id: String): Observable<alarma> {
    return this.http.get<alarma>(this.inboxUrl+id)
  }

  sendEmail(alarm: alarma): Observable<alarma> {
    const Url = 'https://back-selfcareapp.herokuapp.com/selfcare/message';
    return this.http.post<alarma>(Url,alarm);
  }
  

}
