import { Injectable } from "@angular/core";
import { respuestasFinalesGatewayAbstract } from "../../models/respuestasAlarmas/gateway/respuestas-Finales-gateway.abstract";



@Injectable()
export class respuestasFinalesService {

    constructor(private respuestasFinalesService: respuestasFinalesGatewayAbstract) {

    }

    /**
    * obtiene las respuestas finales
    * @returns {Observable<any[]>}
    */
    public getDiagnosticoFinalById(id: String) {
        return this.respuestasFinalesService.getDiagnosticoFinalById(id);
    }

}