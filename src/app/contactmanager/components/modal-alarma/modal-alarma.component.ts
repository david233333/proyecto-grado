import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlarmasService } from '../../infraestructure/alarmas/alarmas.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-modal-alarma',
  templateUrl: './modal-alarma.component.html',
  styleUrls: ['./modal-alarma.component.scss']
})
export class ModalAlarmaComponent implements OnInit {

  formulario: FormGroup;
  constructor(private fb: FormBuilder, private alar: AlarmasService, public dialogRef: MatDialogRef<ModalAlarmaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

     }

  ngOnInit() {
   
    this.formulario = this.fb.group({

      documentNumber: [this.data.documento, [Validators.required, Validators.minLength(3)]],
      from: ['Web', [Validators.required, Validators.minLength(3)]],
      tituloEmail: ['', [Validators.required, Validators.minLength(3)]],
      cuerpoEmail: ['', [Validators.required, Validators.minLength(3)]],

    })
  }

public save() {

    this.alar.sendEmail(this.formulario.value).subscribe(data => {
      this.dialogRef.close(true);
    })
 }

public  dismiss():void {
    this.dialogRef.close();
  }

}

