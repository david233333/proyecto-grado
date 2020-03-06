import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { diagnostico } from '../../domain/models/diagnosticos/entity/diagnosticos';
import { diagnosticsGatewayAbstract } from '../../domain/models/diagnosticos/gateway/diagnosticos-gateway.abstract';



@Injectable()
export class DiagnosticoService extends diagnosticsGatewayAbstract {
  

  constructor(private http: HttpClient) {
    super();
  }

  diagnosticosUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/diagnostic/';

  getDiganostics(domainName: string): Observable<diagnostico[]> {
    return this.http.get<diagnostico[]>(this.diagnosticosUrl+domainName)
  }

}
