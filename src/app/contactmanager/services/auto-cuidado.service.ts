import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caa } from '../models/caa';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutoCuidadoService {

  constructor(private http: HttpClient) { }

 // CaaUrl = 'http://localhost:8080/selfcare/caa/';
  CaaUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/caa/';

  getCaayById(id: String): Observable<Caa> {
    return this.http.get<Caa>(this.CaaUrl+id)
  }

}
