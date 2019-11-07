import { Component, OnInit, Input } from '@angular/core';
import { framinhgam } from '../../models/framingham';

@Component({
  selector: 'app-framingham',
  templateUrl: './framingham.component.html',
  styleUrls: ['./framingham.component.scss']
})
export class FraminghamComponent implements OnInit {
  
  @Input() framighamV: framinhgam;

  constructor() { }

  ngOnInit() {
  }

}
