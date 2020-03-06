import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { dfx } from '../../domain/models/diagnosticoFinal/entity/diagnosticoFinal';



@Injectable()
export class DiagnosticoFinalService {

  constructor(private http: HttpClient) { }

 // FinalUrl = 'http://localhost:8080/selfcare/finalDx';
 FinalUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/finalDx';

  EnviarFinal(cuerpo: dfx) : Observable<dfx[]>{
    return this.http.post<dfx[]>(this.FinalUrl,cuerpo);
  }
}
