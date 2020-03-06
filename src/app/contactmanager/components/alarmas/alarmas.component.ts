import { Component, OnInit, Input } from '@angular/core';
import { alarma } from '../../domain/models/alarmas/entity/alarmas';
import { MatDialog } from '@angular/material';
import { ModalAlarmaComponent } from '../modal-alarma/modal-alarma.component';
import { framinhgam } from '../../domain/models/framingham/entity/framingham';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.scss']
})
export class AlarmasComponent implements OnInit {
  
  @Input() alar:alarma;
  @Input() framighamV: framinhgam;

  constructor() {
   }
  ngOnInit() {

  }

}
