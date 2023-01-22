import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of,BehaviorSubject, flatMap } from 'rxjs';
import { Cart } from '../models/cart';
import { ProductCart } from '../models/productcart';
import { LocalstorageService } from './localstorage.service';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  
  constructor(private http:HttpClient,private ls:LocalstorageService) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(error);
  }
  
  getNrClosedCarts(): Observable<number>{
    return this.http.get<Cart[]>(`${environment.server}/shops/${environment.shopId}/statistics/closedCarts`)
    .pipe(catchError(this.errorHandler));
  };

  getNrOpenCarts(): Observable<number>{
    return this.http.get<Cart[]>(`${environment.server}/shops/${environment.shopId}/statistics/openCarts`)
    .pipe(catchError(this.errorHandler));
  };

  getNrUsedCoupons(): Observable<number>{
    
    return this.http.get<Cart[]>(`${environment.server}/shops/${environment.shopId}/statistics/usedCoupons`)
    .pipe(catchError(this.errorHandler));
  };

  getAverageOrderValueInTimeSpan(start:Date,end:Date): Observable<number>{
    return this.http.get<Cart[]>(`${environment.server}/shops/${environment.shopId}/statistics/averageOrderValue?start=${start}&end=${end}`)
    .pipe(catchError(this.errorHandler));
  };




  
}
