import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { PostsComponent } from '../../modules/posts/posts.component';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullwidthComponent } from '../fullwidth/fullwidth.component';
import { LoginComponent } from '../../modules/login/login.component';
import { AppMaterialModule } from '../../app-material.module';
import { LoginFormComponent } from '../../modules/login-form/login-form.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent,
    FullwidthComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    AppMaterialModule,
  ],
  entryComponents: [
    LoginFormComponent
  ]
})
export class DefaultModule { }
