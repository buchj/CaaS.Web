import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';   

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  public activeCartSubject = new BehaviorSubject<number>(this.activeCartId);

 set activeCartId(value:number) {
   this.activeCartSubject.next(value); 
   localStorage.setItem('activeCart', value.toString());
 }

 get activeCartId():number {
   return parseInt(localStorage.getItem('activeCart')!);
 }

 public activeCustomerSubject = new BehaviorSubject(this.activeCustomerId);

 set activeCustomerId(value) {
  this.activeCustomerSubject.next(value); 
  localStorage.setItem('activeCustomer', value.toString());
}

get activeCustomerId() {
  return parseInt(localStorage.getItem('activeCustomer')!);
}

public activeAppKeySubject = new BehaviorSubject(this.activeAppKey);

 set activeAppKey(value) {
  this.activeAppKeySubject.next(value); 
  localStorage.setItem('activeAppKey', value.toString());
}

get activeAppKey() {
  return localStorage.getItem('activeAppKey')!;
}


}
