import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private matDialog: MatDialog) { }

  ngOnInit() {
    const MAT_DIALOG_CONFIG = new MatDialogConfig();
    MAT_DIALOG_CONFIG.disableClose = true;
    MAT_DIALOG_CONFIG.autoFocus = true;
    MAT_DIALOG_CONFIG.width = '40vw';
    this.matDialog.open(LoginFormComponent, MAT_DIALOG_CONFIG);
  }

}
