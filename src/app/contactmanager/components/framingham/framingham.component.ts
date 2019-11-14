import { Component, OnInit, Input } from '@angular/core';
import { framinhgam } from '../../models/framingham';

@Component({
  selector: 'app-framingham',
  templateUrl: './framingham.component.html',
  styleUrls: ['./framingham.component.scss']
})
export class FraminghamComponent implements OnInit {
  
  @Input() framighamV: framinhgam;
  variable:string;

  constructor() { }

  ngOnInit() {
    if(this.framighamV.paSistolica == 'a'){
      this.framighamV.paSistolica = 'Menor a 120'
    }
    if(this.framighamV.paSistolica == 'b'){
      this.framighamV.paSistolica = '120 - 129'
    }
    if(this.framighamV.paSistolica == 'c'){
      this.framighamV.paSistolica = '130 - 139'
    }
    if(this.framighamV.paSistolica == 'd'){
      this.framighamV.paSistolica = '140 - 159'
    }
    if(this.framighamV.paSistolica == 'e'){
      this.framighamV.paSistolica = 'Mayor a 160'
    }

    if(this.framighamV.colesterol == 'a'){
      this.framighamV.colesterol = 'Menor a 160'
    }
    if(this.framighamV.colesterol == 'b'){
      this.framighamV.colesterol = '160 - 199'
    }
    if(this.framighamV.colesterol == 'c'){
      this.framighamV.colesterol = '200 - 239'
    }
    if(this.framighamV.colesterol == 'd'){
      this.framighamV.colesterol = '240 - 279'
    }
    if(this.framighamV.colesterol == 'e'){
      this.framighamV.colesterol = 'Mayor a 280'
    }

    if(this.framighamV.hdl == 'a'){
      this.framighamV.hdl = 'Mayor a 60'
    }

    if(this.framighamV.hdl == 'b'){
      this.framighamV.hdl = '50 - 59'
    }

    if(this.framighamV.hdl == 'c'){
      this.framighamV.hdl = '40 - 59'
    }

    if(this.framighamV.hdl == 'd'){
      this.framighamV.hdl = 'Menor a 40'
    }

    if(this.framighamV.fuma == true){
      this.variable = 'Si'
    }else{
      this.variable = 'No'
    }

  }

}
