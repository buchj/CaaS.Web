import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
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
  component:CheckoutComponent
},{
  path:'login',
  component:LoginComponent
},{
  path:'adminlogin',
  component:AdminLoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
