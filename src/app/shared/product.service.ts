import { Injectable } from '@angular/core';
import { ProductDTO } from './models/product-dto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductDTO[] = [];
  constructor(private http:HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(error);
  } 

  getAll(shopId:number): Observable<ProductDTO[]>{
    return this.http.get<ProductDTO[]>(`${environment.server}/shops/${shopId}/products`)
    .pipe(catchError(this.errorHandler));
  }

  searchSimple(shopId:number,search:string): Observable<ProductDTO[]>{
    return this.http.post<ProductDTO[]>(`${environment.server}/shops/${shopId}/products/search/${search}`,null)
    .pipe(catchError(this.errorHandler));
  }
}
