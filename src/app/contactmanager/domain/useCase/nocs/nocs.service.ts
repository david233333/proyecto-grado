import { nocsGatewayAbstract } from '../../models/nocs/gateway/nocs-gateway.abstract';
import { Observable } from 'rxjs/Observable';
import { nocs } from '../../models/nocs/entity/nocs';
import { Injectable } from '@angular/core';


@Injectable()
export class nocsService {

    constructor(private nocsService: nocsGatewayAbstract) {

    }

    /**
    * obtiene los nocs x id
    * @returns {Observable<any[]>}
    */
    public getNocsById(id: String): Observable<nocs[]> {
        return this.nocsService.getNocsById(id);
    }

}