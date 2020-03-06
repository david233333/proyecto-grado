import { Injectable } from '@angular/core';
import { domainsGatewayAbstract } from '../../models/dominios/gateway/dominios-gateway.abstract';
import { Observable } from 'rxjs/Observable';
import { dominios } from '../../models/dominios/entity/dominios';


@Injectable()
export class domainsService {

    constructor(private domainsService: domainsGatewayAbstract) {

    }

    /**
    * obtiene los dominios
    * @returns {Observable<any[]>}
    */
    public getDomains(): Observable<dominios[]> {
        return this.domainsService.getDomains();
    }

}