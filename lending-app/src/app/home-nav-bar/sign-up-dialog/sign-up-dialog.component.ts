import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { UserDetails } from 'src/app/models/user-details';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

  userDetails = new UserDetails();

  constructor(public userService : UserService,
    public dialogRef: MatDialogRef<SignUpDialogComponent>,) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


