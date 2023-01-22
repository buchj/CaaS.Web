import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { ActiveuserGuard } from './shared/services/activeuser.guard';
import { AuthorizationGuard } from './shared/authentication/authorization.guard';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { LoginComponent } from './shop/login/login.component';
import { SearchComponent } from './shop/search/search.component';


const routes: Routes = [{
  path: '',
  redirectTo:'browse',
  pathMatch:'full'
},
{
  path:'search',
  component:SearchComponent
},
{
  path:'checkout',
  component:CheckoutComponent,
  canActivate: [ActiveuserGuard]
},{
  path:'login',
  component:LoginComponent
},{
  path:'adminlogin',
  component:AdminLoginComponent
},{
  path:'statistics',
  component:StatisticsComponent,
  canActivate:[AuthorizationGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
