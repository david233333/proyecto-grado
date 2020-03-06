import { Observable } from "rxjs/Observable";
import { alarma } from "../entity/alarmas";

export abstract class alarmsGatewayAbstract {

    abstract getEmailId(id: String): Observable<alarma>;
    
    abstract sendEmail(alarm: alarma): Observable<alarma>;

}