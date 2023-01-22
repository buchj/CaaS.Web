import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  @Input() cart:Cart = new Cart();
  
  constructor() { }

  ngOnInit(): void {
  }

}
