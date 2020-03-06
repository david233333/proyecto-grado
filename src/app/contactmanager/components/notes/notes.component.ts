import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Caa } from '../../domain/models/RespuestasAutocuidado/entity/caa';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() caa: Caa;

  displayedColumns = ['position', 'title', 'date'];
  dataSource = new MatTableDataSource<Caa>();

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log("notes",this.caa)
  }

  ngOnInit() {
 
   }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
