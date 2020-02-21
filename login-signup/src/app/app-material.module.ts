import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule
  ]
})
export class AppMaterialModule { }
