import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { diagnostico } from '../../models/diagnosticos/entity/diagnosticos';
import { diagnosticsGatewayAbstract } from '../../models/diagnosticos/gateway/diagnosticos-gateway.abstract';


@Injectable()
export class diagnosticsService {

    constructor(private diagnosticsService: diagnosticsGatewayAbstract) {

    }

    /**
    * obtiene los diagnosticos
    * @returns {Observable<any[]>}
    */
    public getDiganostics(domainName: string): Observable<diagnostico[]>{
        return this.diagnosticsService.getDiganostics(domainName);
    }

}