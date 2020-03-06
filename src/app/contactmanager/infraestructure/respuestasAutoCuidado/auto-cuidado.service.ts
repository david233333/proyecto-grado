import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caa } from '../../domain/models/RespuestasAutocuidado/entity/caa';
import { Observable } from 'rxjs/Observable';
import { caaGatewayAbstract } from '../../domain/models/RespuestasAutocuidado/gateway/caa-gateway.abstract';

@Injectable()
export class AutoCuidadoService extends caaGatewayAbstract{

  constructor(private http: HttpClient) {
    super();
  }

  CaaUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/caa/';

  getCaayById(id: String): Observable<Caa> {
    return this.http.get<Caa>(this.CaaUrl+id)
  }

}
