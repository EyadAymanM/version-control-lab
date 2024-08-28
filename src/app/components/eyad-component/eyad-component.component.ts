import { Component } from '@angular/core';

@Component({
  selector: 'app-eyad-component',
  standalone: true,
  imports: [],
  templateUrl: './eyad-component.component.html',
  styleUrl: './eyad-component.component.scss'
})
export class EyadComponentComponent {
  getAll(){
    return "all"
  }
}
