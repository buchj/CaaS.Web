import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.ps.getAll(1).subscribe( (res)=>{
      console.log(res);
      this.products=res;});
  }
}
