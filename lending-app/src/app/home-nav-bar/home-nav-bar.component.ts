import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { UserService } from '../user.service';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

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

  openLoginDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '40vw';
    dialogConfig.maxHeight = '70vh';
    const dialogRef = this.dialog.open(LoginDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.userService.userLogin(result);
    });
  }

}
