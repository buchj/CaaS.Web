import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './shop/search/search.component';
import { ProductListItemComponent } from './shop/product-list-item/product-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailsComponent } from './shop/cart-details/cart-details.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './shop/login/login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductListItemComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
