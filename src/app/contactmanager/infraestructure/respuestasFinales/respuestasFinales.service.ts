import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaFinal } from '../../domain/models/respuestasAlarmas/entity/respuestaFinales';
import { respuestasFinalesGatewayAbstract } from '../../domain/models/respuestasAlarmas/gateway/respuestas-Finales-gateway.abstract';


@Injectable()
export class respuestasFinalesServices extends respuestasFinalesGatewayAbstract {

  constructor(private http: HttpClient) {
    super();
  }

  diagnosticoFinalUrl = 'https://back-selfcareapp.herokuapp.com';
  
  getDiagnosticoFinalById(id){
    return this.http.get<RespuestaFinal[]>(this.diagnosticoFinalUrl+"/selfcare/inboxWeb/"+id)
  }

}