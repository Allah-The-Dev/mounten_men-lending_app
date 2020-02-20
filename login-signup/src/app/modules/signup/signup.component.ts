import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    contactNo: ['', Validators.required],
    dob: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private matDialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService)  { }

  ngOnInit() {
  }

  get signupFormControls() {
    return this.signupForm.controls;
  }

  submitSignupForm() {
    console.log(this.signupForm.value);

    if (this.signupForm.invalid) {return; }

    this.userService.createUser(this.signupForm.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      },
      () => {
        this.matDialogRef.close();
      }
    );

  }

  closeSignupDialog() {
    this.matDialogRef.close();
  }

}
