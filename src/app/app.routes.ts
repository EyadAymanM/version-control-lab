import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ProductWithApiComponent } from './components/product-with-api/product-with-api.component';

export const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products&cart', component: ParentComponent },
  { path: 'observable', component: ObservableComponent, title: 'Observable' },
  { path: 'productlist', component: ProductListComponent },
  { path: 'categories', component: ParentComponent },
  { path: 'productdetails/:productID', component: ProductDetailsComponent },
  { path: 'api', component: ProductWithApiComponent },

  { path: '**', component: NotFoundComponent, title: "Not Found" },
];
