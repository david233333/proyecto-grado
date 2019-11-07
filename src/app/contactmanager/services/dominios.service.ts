import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { framinhgam } from '../models/framingham';
import { dominios } from '../models/dominios';

@Injectable()
export class DominiosService {

  constructor(private http: HttpClient) { }

  dominiosUrl = 'http://localhost:8080/selfcare/domains';

  getDominios(): Observable<dominios[]> {
    return this.http.get<dominios[]>(this.dominiosUrl)
  }
}
