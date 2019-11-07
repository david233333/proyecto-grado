import { mobile } from './../models/mobile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alarma } from '../models/alarmas';
import { Observable } from 'rxjs/Observable';
import { nic } from '../models/nic';

@Injectable()
export class nicService {

  
  constructor(private http: HttpClient) { }

  inboxUrl = 'http://localhost:8080/selfcare/nic/';
 

  getNicsId(id: String): Observable<nic[]> {
    return this.http.get<nic[]>(this.inboxUrl+id)
  }
  




}