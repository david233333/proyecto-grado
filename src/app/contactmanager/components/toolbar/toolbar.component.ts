import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewConctactDialogComponent } from '../new-conctact-dialog/new-conctact-dialog.component';
import { NotesComponent } from '../notes/notes.component';
import { TablaComponent } from '../tabla/tabla.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  @Output() 
  toggleSidenav = new EventEmitter<void>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddContactDialog(): void {
   let dialogRef =  this.dialog.open(TablaComponent,{
      width: '600px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
    
  })

}
}