
import { caaGatewayAbstract } from "../../models/RespuestasAutocuidado/gateway/caa-gateway.abstract";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Caa } from "../../models/RespuestasAutocuidado/entity/caa";


@Injectable()
export class caaService {

    constructor(private caaService: caaGatewayAbstract) {

    }

    /**
    * obtiene las respuestas
    * @returns {Observable<any[]>}
    */
    public getCaayById(id: String): Observable<Caa> {
        return this.caaService.getCaayById(id);
    }

}