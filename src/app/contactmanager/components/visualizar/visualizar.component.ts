import { Component, OnInit, Input } from '@angular/core';
import { dfx } from '../../models/diagnosticoFinal';
import { nocs } from '../../models/nocs';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  @Input() trae: dfx;

  nocs :nocs;
  constructor() { }

  ngOnInit() {
    this.getnocs();
  }

  getnocs(){
    this.nocs = this.trae.noc;
    console.log("esta es la ultima", this.nocs);
  }

}
