import { mobile } from '../../domain/models/mobile/entity/mobile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { nic } from '../../domain/models/nics/entity/nic';

@Injectable()
export class nicService {

  
  constructor(private http: HttpClient) { }

  inboxUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/nic/';
 

  getNicsId(id: String): Observable<nic[]> {
    return this.http.get<nic[]>(this.inboxUrl+id)
  }
  




}