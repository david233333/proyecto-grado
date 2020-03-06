import { Observable } from "rxjs/Observable";
import { dominios } from "../entity/dominios";

export abstract class domainsGatewayAbstract {

    abstract getDomains(): Observable<dominios[]>;
     
 }