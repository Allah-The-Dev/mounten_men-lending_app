import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { SignupComponent } from 'src/app/modules/signup/signup.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
  }

  openSignupDialog() {
    const MAT_DIALOG_CONFIG = new MatDialogConfig();
    MAT_DIALOG_CONFIG.disableClose = true;
    MAT_DIALOG_CONFIG.autoFocus = true;
    MAT_DIALOG_CONFIG.maxWidth = '60vw';
    this.matDialog.open(SignupComponent, MAT_DIALOG_CONFIG);
  }

  openLoginDialog() {
    const MAT_DIALOG_CONFIG = new MatDialogConfig();
    MAT_DIALOG_CONFIG.disableClose = true;
    MAT_DIALOG_CONFIG.autoFocus = true;
    MAT_DIALOG_CONFIG.maxWidth = '60vw';
    MAT_DIALOG_CONFIG.maxHeight = '53vh';
    this.matDialog.open(LoginComponent, MAT_DIALOG_CONFIG);
  }

  checkLogin(){
    this.userService.checkLogin();
  }
}


