import { DiscountOffers } from "./discount-offers"
import { ICategory } from "./icategory"

export interface IProduct {
  ID: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
  categoryID: number;
  // cateogry:ICategory;
  Material?:string;
  IsPurshased?:boolean;
  discount?:DiscountOffers;
  datePurshased?:Date;
  userQuantity?:number;
}
