import { MatDialog } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { respuestasFinalesServices } from '../../infraestructure/respuestasFinales/respuestasFinales.service';
import { RespuestaFinal } from '../../domain/models/respuestasAlarmas/entity/respuestaFinales';
import { preguntaList } from '../../domain/models/listaPreguntas/entity/preguntaList';
import { Observable } from 'rxjs/Observable';
import { preguntaAlarma } from '../../domain/models/preguntasAlarmas/entity/preguntasAlarma';
import { framinhgam } from '../../domain/models/framingham/entity/framingham';
import { ModalAlarmaComponent } from '../modal-alarma/modal-alarma.component';

@Component({
  selector: 'app-respuestas-finales',
  templateUrl: './respuestas-finales.component.html',
  styleUrls: ['./respuestas-finales.component.scss']
})
export class RespuestasFinalesComponent implements OnInit {

  @Input() cedula: number;
  respuestaFinal: RespuestaFinal;
  preguntaList: Array<preguntaList> = [];
  @Input() framighamV: framinhgam;

  constructor(private respuestasFinalesServices: respuestasFinalesServices,public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalAlarmaComponent, {
      width: '400px',
      data : {
        documento : this.framighamV.documentNumber
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


  ngOnInit() {

    this.respuestasFinalesServices.getDiagnosticoFinalById(this.cedula).subscribe(
      (respuesta) => {
        this.respuestaFinal = respuesta[0];
        this.preguntaList = respuesta[0].preguntaList
      }, (error) => {
      }
    )

  }

 
  getRespuesta(NumeroRespuesta: number) {
    return NumeroRespuesta == 1 ? 'Si' : 'No';
  }
  getHaceCuanto(NumeroRespuesta: number) {
    return NumeroRespuesta == 1 ? this.respuestaFinal.alarmDate : 'N/A';
  }

  getPregunta(question) {
    return preguntaAlarma.preguntas
      .filter(function (pregunta) {
        return pregunta.numero == question;
      }).map(function (pregunta) {
        return pregunta.pregunta
      });
  }

  getAlarma(question) {
    return preguntaAlarma.preguntas
      .filter(function (pregunta) {
        return pregunta.numero == question;
      }).map(function (pregunta) {
        return pregunta.alarma
      });
  }

}
