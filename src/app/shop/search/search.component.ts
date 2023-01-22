import { Component, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { ProductDTO } from 'src/app/shared/models/product-dto';
import { ProductService } from 'src/app/shared/product.service';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private ps:ProductService) { }

  products: ProductDTO[] = [];
  foundProducts: ProductDTO[] = [];

  keyup = new EventEmitter<string>();
  isLoading: boolean = false;

  private shopId:number =1;

  ngOnInit(): void {
    this.ps.getAll(this.shopId).subscribe( (res)=>{
      console.log(res);
      this.products=res;
      this.foundProducts=this.products;
    });

      this.keyup.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.isLoading = true),
        switchMap(searchTerm => searchTerm.length>0? this.ps.searchSimple(this.shopId,searchTerm):this.ps.getAll(this.shopId)),
        tap(() => this.isLoading = false)
      ).subscribe(p => this.foundProducts = p);
  }

  
}
