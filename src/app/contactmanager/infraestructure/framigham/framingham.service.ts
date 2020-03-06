import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { framinhgam } from '../../domain/models/framingham/entity/framingham';
import { framighamGatewayAbstract } from '../../domain/models/framingham/gateway/framingham-gateway.abstract';

@Injectable()
export class FraminghamService extends framighamGatewayAbstract {

  constructor(private http: HttpClient) {
    super();
  }

  CaaUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/framingham/';

  getFramiById(id: String): Observable<framinhgam> {
    return this.http.get<framinhgam>(this.CaaUrl+id)
  }

}