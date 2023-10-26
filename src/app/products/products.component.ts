import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products;
  constructor(productService:ProductService){
    this.products = productService.getProducts()
    console.log(this.products)
  }
}
