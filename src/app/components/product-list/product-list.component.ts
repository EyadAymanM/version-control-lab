import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { DiscountOffers } from '../../models/discount-offers';
import { CommonModule } from '@angular/common';
import { AdjustCardDirective } from '../../directives/adjust-card.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,CommonModule,AdjustCardDirective,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
goToProductDetails(arg0: number) {
  
}

  clientName: string = "Ahmed";
  productList: IProduct[] = [
    { ID: 1, discount: 0, IsPurshased: false, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity: 0, img: 'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 1, Material: 'Engineered Wood' },
    { ID: 5, discount: 0, IsPurshased: false, name: 'Trixia 4-Seater Glass Top Dining Table', price: 30000, quantity: 8, img: 'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 1, Material: 'Metal' },
    { ID: 25, discount: 0, IsPurshased: false, name: 'Gasha Marble Top Side Table', price: 14000, quantity: 10, img: 'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 1, Material: 'Metal' },
    { ID: 7, discount: 0, IsPurshased: false, name: 'Ventura Fabric Dining Chair', price: 1500, quantity: 2, img: 'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 2, Material: 'Upholstered Seating' },
    { ID: 17, discount: 2, IsPurshased: false, name: 'Ventura Fabric Dining Chair', price: 1500, quantity: 2, img: 'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 2, Material: 'Upholstered Seating' },
    { ID: 9, discount: 2, IsPurshased: false, name: 'Boston Study Chair', price: 1000, quantity: 10, img: 'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 2, Material: 'Upholstered Seating' },
    { ID: 10, discount: 2, IsPurshased: false, name: 'Coby Extendable TV Unit', price: 13000, quantity: 0, img: 'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, Material: 'Wood' },
    { ID: 15, discount: 1, IsPurshased: false, name: 'Accent TV Unit', price: 36999, quantity: 4, img: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, Material: 'MDF' },
    { ID: 55, discount: 1, IsPurshased: false, name: 'Plymouth TV Unit', price: 36999, quantity: 3, img: 'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, Material: 'wood' },
  ];
  selectedCategory:IProduct[]=[]

  constructor() {
    // this.productList = 
  }

  toggleImage(i: number) {
    let p: IProduct | undefined = this.productList.find((product) => product.ID == i)
    if (p) {
      if(!p.IsPurshased) {
        p.quantity--
        p.datePurshased = new Date()
      }
      p.IsPurshased = !p.IsPurshased
    }
  }

  set setSelectedCategory(value: number) {
    this.selectedCategory = this.productList.filter((product) => product.categoryID == value)
    
  }

  @Input() set filterByPrice(value:number){
    this.selectedCategory = this.productList.filter((product) => product.price <= value)
  }
  ngOnInit(): void {
    this.selectedCategory = this.productList
  }
  @Output()
  onAddToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>()
  addToCart(product: IProduct) {
    this.onAddToCart.emit(product)
  }
}
