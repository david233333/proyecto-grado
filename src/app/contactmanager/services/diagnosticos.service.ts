import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { diagnostico } from '../models/diagnosticos';



@Injectable()
export class DiagnosticoService {

  constructor(private http: HttpClient) { }

  //diagnosticosUrl = 'http://localhost:8080/selfcare/diagnostic/';
  diagnosticosUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/diagnostic/';

  getDiganosticos(domainName: string): Observable<diagnostico[]> {
    return this.http.get<diagnostico[]>(this.diagnosticosUrl+domainName)
  }
}
