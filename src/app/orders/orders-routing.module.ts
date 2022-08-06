import { NgModule } from '@angular/core';
import { MyOrdersComponent } from "../my-orders/MyOrdersComponent";

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RoleGuard } from '../role.guard';

const routes: Routes = [
  {path:'myorders', component:MyOrdersComponent,canActivate:[AuthGuard]},


]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class OrderRoutingModule { }