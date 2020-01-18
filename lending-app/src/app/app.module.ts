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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavBarComponent,
    HomeContentComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AdminHomeNavBarComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
