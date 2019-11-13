import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { framinhgam } from '../models/framingham';
import { nocs } from '../models/nocs';

@Injectable()
export class NocsService {

  constructor(private http: HttpClient) { }

  //nocsUrl = 'http://localhost:8080/selfcare/noc/';
  nocsUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/noc/';

  getNocsById(id: String): Observable<nocs[]> {
    return this.http.get<nocs[]>(this.nocsUrl+id)
  }

}