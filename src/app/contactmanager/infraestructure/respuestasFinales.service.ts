import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RespuestaFinal } from '../domain/models/respuestasAlarmas/entity/respuestaAlarma';


@Injectable()
export class respuestasFinalesServices {

  constructor(private http: HttpClient) { }

  diagnosticoFinalUrl = 'https://back-selfcareapp.herokuapp.com';
  
  getDiagnosticoFinalById(id){
    return this.http.get<RespuestaFinal[]>(this.diagnosticoFinalUrl+"/selfcare/inboxWeb/"+id)
  }

}