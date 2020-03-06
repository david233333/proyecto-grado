import { Observable } from 'rxjs/Observable';
import { alarma } from '../../alarmas/entity/alarmas';
import { nocs } from '../entity/nocs';

export abstract class nocsGatewayAbstract {

    abstract getNocsById(id: String): Observable<nocs[]>;

}
