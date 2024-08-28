import { Component } from '@angular/core';

@Component({
  selector: 'app-mostafa',
  standalone: true,
  imports: [],
  templateUrl: './mostafa.component.html',
  styleUrl: './mostafa.component.scss'
})
export class MostafaComponent {
  categories: {}[] = [
    { categoryID: 1, Name: 'Table' },
    { categoryID: 2, Name: 'Chair' },
    { categoryID: 3, Name: 'TV Unit' }
  ];
}
