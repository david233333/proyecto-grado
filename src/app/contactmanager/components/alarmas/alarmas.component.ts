import { Component, OnInit, Input } from '@angular/core';
import { alarma } from '../../models/alarmas';
import { MatDialog } from '@angular/material';
import { ModalAlarmaComponent } from '../modal-alarma/modal-alarma.component';
import { framinhgam } from '../../models/framingham';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.scss']
})
export class AlarmasComponent implements OnInit {
  
  @Input() alar:alarma;
  @Input() framighamV: framinhgam;



  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalAlarmaComponent, {
      width: '400px',
      data : {
        documento : this.framighamV.documentNumber
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {

  }

}
