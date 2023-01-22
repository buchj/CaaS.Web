import { Component, Input, OnInit } from '@angular/core';
import { Console } from 'console';
import { ProductDTO } from 'src/app/shared/models/product-dto';
import { ProductService } from 'src/app/shared/product.service';
import { CartService } from 'src/app/shared/services/cart.service';


@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: ProductDTO = new ProductDTO();

  @Input() showBuyButton: boolean = false;
  constructor(private cs:CartService) { }

  addProductToCart(id:number){
    console.log(id);
    this.cs.addOrder(id,1).subscribe(res=>console.log(res));
  }

  ngOnInit(): void {
  }

}
