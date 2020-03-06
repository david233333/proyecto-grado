
import { Observable } from 'rxjs/Observable';
import { Caa } from '../entity/caa';

export abstract class caaGatewayAbstract {

    abstract getCaayById(id: String): Observable<Caa>;

}