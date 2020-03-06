import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { dominios } from '../../domain/models/dominios/entity/dominios';
import { domainsGatewayAbstract } from '../../domain/models/dominios/gateway/dominios-gateway.abstract';

@Injectable()
export class DominiosService extends domainsGatewayAbstract {
 

  constructor(private http: HttpClient) {
    super();
  }

  dominiosUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/domains';

  getDomains(): Observable<dominios[]> {
    return this.http.get<dominios[]>(this.dominiosUrl)
  }
}
