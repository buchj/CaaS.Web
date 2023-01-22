import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { ProductDTO } from 'src/app/shared/models/product-dto';
import { ProductCart } from 'src/app/shared/models/productcart';
import { ProductService } from 'src/app/shared/services/product.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  productCarts:ProductCart[] = [];
  products:ProductDTO[] = [];
  rawTotal:number=0;
  totalItemCount:number=0;

  constructor(private cs:CartService,private ps:ProductService) { }

  ngOnInit(): void {
    this.cs.getCartContents().subscribe(async res=>{
      this.productCarts=res;
      res.forEach(pc=> this.ps.getById(pc.productId!).subscribe(p=>this.products[p.id!]=p));

      await new Promise(r => setTimeout(r, 300));
      this.updateTotal();
      this.updateTotalItemCount();
    });
    
  }

  updateTotal(){
    this.rawTotal = 0;
    for (let index = 0; index < this.productCarts.length; index++) {
      this.rawTotal+= this.productCarts[index].amount! * this.products[this.productCarts[index].productId!].price!;
    }
  }

  updateTotalItemCount(){
    this.totalItemCount=0;
    for (let index = 0; index < this.productCarts.length; index++) {
      this.totalItemCount+= this.productCarts[index].amount!;
    }
  }

}
