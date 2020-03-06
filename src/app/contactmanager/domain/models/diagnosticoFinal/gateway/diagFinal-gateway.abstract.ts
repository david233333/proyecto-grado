
import { Observable } from "rxjs/Observable";
import { dfx } from "../entity/diagnosticoFinal";

export abstract class diagnosticFinalGatewayAbstract {

    abstract sendDiagnosticFinal(body: dfx) : Observable<dfx[]>;
    
   
}