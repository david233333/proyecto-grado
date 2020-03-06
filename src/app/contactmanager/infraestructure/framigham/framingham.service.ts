import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { framinhgam } from '../../domain/models/framingham/entity/framingham';

@Injectable()
export class FraminghamService {

  constructor(private http: HttpClient) { }

  CaaUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/framingham/';


  getFramiById(id: String): Observable<framinhgam> {
    return this.http.get<framinhgam>(this.CaaUrl+id)
  }

}