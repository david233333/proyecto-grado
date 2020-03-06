import { Observable } from "rxjs/Observable";
import { nic } from "../entity/nic";


export abstract class nicsGatewayAbstract {

    abstract getNicsId(id: String): Observable<nic[]>;
    
}
