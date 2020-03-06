import { Injectable } from "@angular/core";
import { mobileGatewayAbstract } from "../../models/mobile/gateway/mobile-gateway.abstract";
import { alarma } from "../../models/alarmas/entity/alarmas";
import { Observable } from "rxjs/Observable";
import { mobile } from "../../models/mobile/entity/mobile";


@Injectable()
export class mobileService {

    constructor(private mobileService: mobileGatewayAbstract) {

    }

    /**
    * Obtiene el email x id
    * @returns {Observable<any[]>}
    */
    public getEmailId(id: String): Observable<alarma> {
        return this.mobileService.getEmailId(id);
    }

    /**
   * envia el email
   * @returns {Observable<any[]>}
   */
    public sendEmail(message: mobile): Observable<mobile> {
        return this.mobileService.sendEmail(message);
    }

}