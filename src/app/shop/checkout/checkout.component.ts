import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { timingSafeEqual } from 'crypto';
import { Cart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/shared/services/cart.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cs:CartService,private ls:LocalstorageService) { }

  carts:Cart[] = [];
  selectedIndex=0;
  creditCard:string="";
  orderSuccessState = 0;
  orderResultText= "";

  ngOnInit(): void {
    this.cs.getCartsOfActiveCustomer().subscribe(res=>{
      this.carts=res;
      
      
    });
  }

  changeActiveCart(cartId:number){
    console.log(cartId);

    this.ls.activeCartId=cartId;
    this.selectedIndex=cartId;
  }

  attemptCheckout(){
    console.log("checkout:"+this.creditCard);
    this.cs.sendOrder(parseInt(this.creditCard)).subscribe(order=>{
      if(order.id){
        this.orderSuccessState=1;
        this.orderResultText=`Your order (with the number ${order.id}) has been processed. You saved a total of ${order.discountsum}€`
      }
      else{
        this.orderSuccessState=-1;
        this.orderResultText="An error has occured, your request has not been processed"
      }
      
    ;
    });
  }

}
