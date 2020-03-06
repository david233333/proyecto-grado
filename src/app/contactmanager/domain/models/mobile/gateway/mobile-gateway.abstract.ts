import { Observable } from "rxjs/Observable";
import { alarma } from "../../alarmas/entity/alarmas";
import { mobile } from "../entity/mobile";


export abstract class mobileGatewayAbstract {

    abstract getEmailId(id: String): Observable<alarma>;
    abstract sendEmail(message: mobile ) : Observable<mobile>
    
   
}