import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../domain/models/user/entity/user';
import { UserService } from '../../infraestructure/user/user.service';

@Component({
  selector: 'app-new-conctact-dialog',
  templateUrl: './new-conctact-dialog.component.html',
  styleUrls: ['./new-conctact-dialog.component.scss']
})
export class NewConctactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user: User;
  constructor(private dialogRef: MatDialogRef<NewConctactDialogComponent>,
    private userService:UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  save(){
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    })
    this.dialogRef.close(this.user)
  }

  dismiss(){
    this.dialogRef.close(null)
  }
}
