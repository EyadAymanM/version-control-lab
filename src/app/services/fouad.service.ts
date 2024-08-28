import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifouad } from '../models/ifouad';

@Injectable({
  providedIn: 'root'
})
export class FouadService implements OnInit{

  constructor(private HTTPClient: HttpClient) { }
  
  ngOnInit(): void {

  }

  getAll():Observable<Ifouad>{
    return this.HTTPClient.get<Ifouad>('');
  }
  

}
