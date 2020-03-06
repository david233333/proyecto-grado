import { Observable } from 'rxjs/Observable';
import { dominios } from '../../models/dominios/entity/dominios';
import { Injectable } from '@angular/core';
import { framighamGatewayAbstract } from '../../models/framingham/gateway/framingham-gateway.abstract';
import { framinhgam } from '../../models/framingham/entity/framingham';


@Injectable()
export class framighamService {

    constructor(private framighamService: framighamGatewayAbstract) {

    }

    /**
    * obtiene el framigham x id
    * @returns {Observable<any[]>}
    */
    public getFramiById(id: String):  Observable<framinhgam> {
        return this.framighamService.getFramiById(id);
    }

}