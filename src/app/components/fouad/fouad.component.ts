import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fouad',
  standalone: true,
  imports: [],
  templateUrl: './fouad.component.html',
  styleUrl: './fouad.component.scss'
})
export class FouadComponent implements OnInit{

  name:string='fouad';
  age:number=24
  constructor(){}
  ngOnInit(): void {
    console.log(`hello ${this.name} your age is ${this.age} `)
  }

}
