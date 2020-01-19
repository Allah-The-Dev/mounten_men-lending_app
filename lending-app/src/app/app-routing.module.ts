import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { UserKycComponent } from './user-kyc/user-kyc.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'user/:name', component: UserHomeComponent},
  { path: 'apply-loan', component: LoanApplicationComponent },
  { path: 'user-kyc', component: UserKycComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
