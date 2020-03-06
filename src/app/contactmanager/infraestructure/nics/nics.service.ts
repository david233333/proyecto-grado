import { mobile } from '../../domain/models/mobile/entity/mobile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { nic } from '../../domain/models/nics/entity/nic';
import { nicsGatewayAbstract } from '../../domain/models/nics/gateway/nics-gateway.abstract';

@Injectable()
export class nicService extends nicsGatewayAbstract{

  
  constructor(private http: HttpClient) {
    super();
  }

  inboxUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/nic/';
 

  getNicsId(id: String): Observable<nic[]> {
    return this.http.get<nic[]>(this.inboxUrl+id)
  }
  




}