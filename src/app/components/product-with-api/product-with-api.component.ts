import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-with-api',
  templateUrl: './product-with-api.component.html',
  styleUrls: ['./product-with-api.component.css']
})
export class ProductWithApiComponent implements OnInit {
  selectedCategory: any;
  productList: any;

  constructor() { }

  ngOnInit() {
    this.selectedCategory = this.productList

  }


  

}
