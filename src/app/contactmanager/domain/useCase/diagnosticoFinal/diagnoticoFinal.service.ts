
import { Observable } from "rxjs/Observable";
import { diagnosticFinalGatewayAbstract } from '../../models/diagnosticoFinal/gateway/diagFinal-gateway.abstract';
import { Injectable } from '@angular/core';
import { alarma } from "../../models/alarmas/entity/alarmas";
import { dfx } from "../../models/diagnosticoFinal/entity/diagnosticoFinal";


@Injectable()
export class diagnosticFinalService {

    constructor(private diagnosticFinalService: diagnosticFinalGatewayAbstract) {

    }

    /**
    * envia el diagnostico final
    * @returns {Observable<any[]>}
    */
    public sendDiagnosticFinal(body: dfx) : Observable<dfx[]> {
        return this.diagnosticFinalService.sendDiagnosticFinal(body);
    }

}

