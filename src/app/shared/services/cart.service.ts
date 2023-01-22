import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of,BehaviorSubject, flatMap } from 'rxjs';
import { Cart } from '../models/cart';
import { ProductCart } from '../models/productcart';
import { LocalstorageService } from './localstorage.service';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http:HttpClient,private ls:LocalstorageService) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(error);
  } 

  getCartsOfActiveCustomer(): Observable<Cart[]>{
    return this.ls.activeCustomerSubject.pipe(flatMap(customerId=>{
    return this.http.get<Cart[]>(`${environment.server}/carts?customerId=${ customerId}`)
    .pipe(catchError(this.errorHandler));
    }));
  }

  addProductToActiveCart(productId:number,amount:number){
    return this.ls.activeCartSubject.pipe(flatMap(cartId=>{
      return this.http.post<Cart[]>(`${environment.server}/carts/${cartId}/products?productId=${productId}&amount=${amount}`,null)
      .pipe(catchError(this.errorHandler));
    }));
  }

  getCartContents():Observable<ProductCart[]>{
    return this.ls.activeCartSubject.pipe(flatMap(cartId=>{
      return this.http.get<ProductCart[]>(`${environment.server}/carts/${cartId}/products`)
      .pipe(catchError(this.errorHandler));
    }));
  }

   httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  sendOrder(creditCard:number):Observable<Order>{
    //https://localhost:7034/api/carts/1/order?creditCard=12
    return this.http.post<Order>(`${environment.server}/carts/${this.ls.activeCartId}/order?creditCard=${creditCard}`,"[0]",this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
}
