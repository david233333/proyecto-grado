import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caa } from '../../domain/models/RespuestasAutocuidado/entity/caa';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutoCuidadoService {

  constructor(private http: HttpClient) { }

  CaaUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/caa/';

  getCaayById(id: String): Observable<Caa> {
    return this.http.get<Caa>(this.CaaUrl+id)
  }

}
