import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { dfx } from '../../domain/models/diagnosticoFinal/entity/diagnosticoFinal';
import { diagnosticFinalGatewayAbstract } from '../../domain/models/diagnosticoFinal/gateway/diagFinal-gateway.abstract';



@Injectable()
export class DiagnosticoFinalService extends diagnosticFinalGatewayAbstract {
 

  constructor(private http: HttpClient) {
    super();
  }

 
 FinalUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/finalDx';

 
  sendDiagnosticFinal(body: dfx): Observable<dfx[]> {
    return this.http.post<dfx[]>(this.FinalUrl,body);
  }
}
