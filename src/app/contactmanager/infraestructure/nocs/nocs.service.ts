import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { nocs } from '../../domain/models/nocs/entity/nocs';

@Injectable()
export class NocsService {

  constructor(private http: HttpClient) { }

  nocsUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/noc/';

  getNocsById(id: String): Observable<nocs[]> {
    return this.http.get<nocs[]>(this.nocsUrl+id)
  }

}