import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Cart } from '../models/cart';
import { ProductCart } from '../models/productcart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(error);
  } 

  getCustomersCarts(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${environment.server}/carts?customerId=${this.getActiveCustomerId()}`)
    .pipe(catchError(this.errorHandler));
  }

  getActiveCartId():number{
    return 1;
  }

  getActiveCustomerId():number{
    return 1;
  }

  setActiveCartId(){

  }

  addOrder(productId:number,amount:number){
    let cartId:number = this.getActiveCartId();
    return this.http.post<Cart[]>(`${environment.server}/carts/${cartId}/products?productId=${productId}&amount=${amount}`,null)
    .pipe(catchError(this.errorHandler));
  }

  getCartContents():Observable<ProductCart[]>{
    let cartId:number = this.getActiveCartId();
    return this.http.get<Cart[]>(`${environment.server}/carts/${cartId}/products`)
    .pipe(catchError(this.errorHandler));
  }
}
