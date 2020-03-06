import { alarmsGatewayAbstract } from "../../models/alarmas/gateway/alarmas-gateway.abstract";
import { Injectable } from "@angular/core";
import { alarma } from "../../models/alarmas/entity/alarmas";
import { Observable } from "rxjs/Observable";


@Injectable()
export class alarmsService {

    constructor(private alarmService: alarmsGatewayAbstract) {

    }

    /**
    * Obtiene el email x id
    * @returns {Observable<any[]>}
    */
    public getEmailId(id: String): Observable<alarma> {
        return this.alarmService.getEmailId(id);
    }

    /**
   * envia el email
   * @returns {Observable<any[]>}
   */
    public sendEmail(alarm: alarma): Observable<alarma> {
        return this.alarmService.sendEmail(alarm);
    }

}