import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManagePortfoliosComponent } from './manage-portfolios/manage-portfolios.component';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';


@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManagePortfoliosComponent, AdminHeaderComponent, AdminFooterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
