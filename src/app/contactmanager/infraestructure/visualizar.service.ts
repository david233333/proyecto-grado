import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { framinhgam } from '../domain/models/framingham/entity/framingham';
import { nocs } from '../domain/models/nocs/entity/nocs';
import { dfx } from '../domain/models/diagnosticoFinal/entity/diagnosticoFinal';

@Injectable()
export class VisualizarService {

  constructor(private http: HttpClient) { }

  visualizarUrl = 'http://localhost:8080/selfcare/finalDx/';

  getId(id: String): Observable<dfx[]> {
    return this.http.get<dfx[]>(this.visualizarUrl+id)
  }

}