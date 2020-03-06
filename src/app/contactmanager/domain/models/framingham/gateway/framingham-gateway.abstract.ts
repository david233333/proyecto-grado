import { Observable } from "rxjs/Observable";
import { framinhgam } from "../entity/framingham";


export abstract class framighamGatewayAbstract {

    abstract getFramiById(id: String): Observable<framinhgam>;
     
 }