
import { Injectable } from '@angular/core';
import { nicsGatewayAbstract } from '../../models/nics/gateway/nics-gateway.abstract';
import { Observable } from 'rxjs/Observable';
import { nic } from '../../models/nics/entity/nic';



@Injectable()
export class nicsService {

    constructor(private nicsService: nicsGatewayAbstract) {

    }

    /**
    * obtiene los nics
    * @returns {Observable<any[]>}
    */
    public getNicsId(id: String): Observable<nic[]> {
        return this.nicsService.getNicsId(id);
    }

}