import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    fullName: ['', Validators.required],
    emailId: ['', Validators.required],
    contactNumber: ['', Validators.required],
    dob: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private matDialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any)  { }

  ngOnInit() {
  }

  submitSignupForm() {
    console.log(this.signupForm);
  }

  closeSignupDialog() {
    this.matDialogRef.close();
  }

  getFullNameErrorMessage() {
    return 'sfraf';
  }

}
