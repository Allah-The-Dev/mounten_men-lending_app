import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../user.service';
import { UserDetails } from 'src/app/models/user-details';
import { MatDialogRef,MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

  userDetails = new UserDetails();

  constructor(public userService : UserService,
    public dialogRef: MatDialogRef<SignUpDialogComponent>,
    public dialog : MatDialog) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  registerNewUser(userDetails){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '40vw';
    dialogConfig.maxHeight = '40vh';

    this.userService.createUser(userDetails)
      .subscribe(response => {
        if(response.status === 200){
          dialogConfig.data = {message:'Successful signup, please login.'}
          const dialogRef = this.dialog.open(SignUpConfirmationComponent,dialogConfig);
          dialogRef.afterClosed().subscribe(result => {
            this.dialogRef.close();
          });
        }
      },
      error => {
        dialogConfig.data = {message:'Something went wrong, please check internet connectivity.'}
        const dialogRef = this.dialog.open(SignUpConfirmationComponent,dialogConfig);
          dialogRef.afterClosed().subscribe(result => {
            this.dialogRef.close();
          });
      });
  }

}

@Component({
  selector: 'sign-up-confirmation',
  templateUrl: 'sign-up-confirmation.component.html',
})
export class SignUpConfirmationComponent {

  constructor(
    public dialogRef: MatDialogRef<SignUpConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


