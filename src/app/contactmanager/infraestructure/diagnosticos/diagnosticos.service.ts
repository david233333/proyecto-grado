import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { diagnostico } from '../../domain/models/diagnosticos/entity/diagnosticos';



@Injectable()
export class DiagnosticoService {

  constructor(private http: HttpClient) { }

  diagnosticosUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/diagnostic/';

  getDiganosticos(domainName: string): Observable<diagnostico[]> {
    return this.http.get<diagnostico[]>(this.diagnosticosUrl+domainName)
  }
}
