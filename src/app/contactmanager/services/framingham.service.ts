import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { framinhgam } from '../models/framingham';

@Injectable()
export class FraminghamService {

  constructor(private http: HttpClient) { }

  //CaaUrl = 'http://localhost:8080/selfcare/framingham/';
  CaaUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/framingham/';


  getFramiById(id: String): Observable<framinhgam> {
    return this.http.get<framinhgam>(this.CaaUrl+id)
  }

}