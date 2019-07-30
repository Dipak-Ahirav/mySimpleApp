import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from './model/foodItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  private url_:string="../assets/data.json";
  constructor(private http:HttpClient) { }


  getData():Observable<FoodItem[]>{
   return this.http.get<FoodItem[]>(this.url_);
  }

  
}
