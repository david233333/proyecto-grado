import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { dominios } from '../../domain/models/dominios/entity/dominios';

@Injectable()
export class DominiosService {

  constructor(private http: HttpClient) { }

  dominiosUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/domains';

  getDominios(): Observable<dominios[]> {
    return this.http.get<dominios[]>(this.dominiosUrl)
  }
}
