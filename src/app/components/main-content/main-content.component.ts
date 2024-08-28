import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { DiscountOffers } from '../../models/discount-offers';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  discount: DiscountOffers = DiscountOffers['15%'];
  store: Store = new Store('UDEMY', ['Sohag', 'Cairo', 'Alexandria'], 'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg');
  ClientName: string = "Ahmed";
  product: IProduct = {
    ID: 1,
    name: "JS Course",
    quantity: 10,
    price: 200,
    img: "https://multishoring.com/wp-content/uploads/2024/04/JavaScript-Symbol.png",
    // cateogry: {
    //   ID: 5,
    //   name: "Programming Course"
    // },
    categoryID: 0
  }
}
