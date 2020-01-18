import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.css']
})
export class HomeNavBarComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private userService : UserService) { }

  ngOnInit() {
  }

  openSignUpDialog():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '40vw';
    dialogConfig.maxHeight = '70vh';
    const dialogRef = this.dialog.open(SignUpDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.userService.createUser(result);
    });
  }

}
