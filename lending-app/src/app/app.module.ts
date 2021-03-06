import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeNavBarComponent } from './home-nav-bar/home-nav-bar.component';
import { MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeContentComponent } from './home-content/home-content.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHomeNavBarComponent } from './admin-home-nav-bar/admin-home-nav-bar.component';
import { SignUpDialogComponent,SignUpConfirmationComponent } from './home-nav-bar/sign-up-dialog/sign-up-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoginDialogComponent } from './home-nav-bar/login-dialog/login-dialog.component';
import { UserKycComponent } from './user-kyc/user-kyc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavBarComponent,
    HomeContentComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AdminHomeNavBarComponent,
    SignUpDialogComponent,
    SignUpConfirmationComponent,
    LoanApplicationComponent,
    LoginDialogComponent,
    UserKycComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents:[SignUpDialogComponent,SignUpConfirmationComponent]
})
export class AppModule { }
