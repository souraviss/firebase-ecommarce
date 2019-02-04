import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryMasterComponent } from '../Admin/category-master/category-master.component';
import { CustomerComponent } from '../customer/customer.component';
import { AdminDashboardComponent } from '../Admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path: '' , component: AdminDashboardComponent, pathMatch:'full' },
  { path: 'AdminCategory' , component:CategoryMasterComponent },
  { path: 'Customer' , component:CustomerComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
