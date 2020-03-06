import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { nocs } from '../../domain/models/nocs/entity/nocs';
import { nocsGatewayAbstract } from '../../domain/models/nocs/gateway/nocs-gateway.abstract';

@Injectable()
export class NocsService extends nocsGatewayAbstract{

  constructor(private http: HttpClient) {
    super();
  }

  nocsUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/noc/';

  getNocsById(id: String): Observable<nocs[]> {
    return this.http.get<nocs[]>(this.nocsUrl+id)
  }

}