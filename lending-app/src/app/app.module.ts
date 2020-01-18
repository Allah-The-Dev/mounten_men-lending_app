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
    MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeContentComponent } from './home-content/home-content.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHomeNavBarComponent } from './admin-home-nav-bar/admin-home-nav-bar.component';
import { SignUpDialogComponent } from './home-nav-bar/sign-up-dialog/sign-up-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavBarComponent,
    HomeContentComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AdminHomeNavBarComponent,
    SignUpDialogComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[SignUpDialogComponent]
})
export class AppModule { }
