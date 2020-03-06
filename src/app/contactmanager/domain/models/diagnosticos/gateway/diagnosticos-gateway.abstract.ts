import { Observable } from "rxjs/Observable";
import { diagnostico } from "../entity/diagnosticos";

export abstract class diagnosticsGatewayAbstract {

   abstract getDiganostics(domainName: string): Observable<diagnostico[]>;
    
   
}