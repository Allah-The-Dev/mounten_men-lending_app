import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private matDialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService)  { }

  ngOnInit() {
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  closeLoginFormDialog() {
    this.matDialogRef.close();
  }

  submitLoginForm(){
    if (this.loginForm.invalid) {return; }

    this.userService.getOauthToken(this.loginForm.value).subscribe(
      response => {
        this.saveAccessTokenInBrowserSession(response)
      },
      error => {
        console.log(error);
      },
      () => {
        this.matDialogRef.close();
      }
    );
  }

  saveAccessTokenInBrowserSession(oauthTokenData){
    window.sessionStorage.setItem('token', JSON.stringify(oauthTokenData));
    console.log(window.sessionStorage.getItem('token'));
  }

}
