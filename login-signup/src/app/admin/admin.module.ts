import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManagePortfoliosComponent } from './manage-portfolios/manage-portfolios.component';
import { AppMaterialModule } from '../app-material.module';


@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManagePortfoliosComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule
  ]
})
export class AdminModule { }
