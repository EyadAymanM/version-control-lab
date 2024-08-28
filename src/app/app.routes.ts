import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { EyadComponentComponent } from './components/eyad-component/eyad-component.component';

export const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'eyad', component: EyadComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'productlist', component: ProductListComponent },
];
