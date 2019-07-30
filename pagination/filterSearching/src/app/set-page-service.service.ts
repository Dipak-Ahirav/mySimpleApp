import { Injectable } from '@angular/core';
import { FoodItem } from './model/foodItem';
import { PagerService } from './service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetPageServiceService {

  foods:FoodItem[];
 
  pagedItems: any[];
  constructor(private pagerService:PagerService) {  }

  setPageNew(newFoods:FoodItem[],pager: any) {
    // get pager object from service
    
    // this.pager = this.pagerService.getPager(newFoods.length, page);
    
  
    // // get current page of items
    // this.pagedItems = newFoods.slice(this.pager.startIndex, this.pager.endIndex + 1);
  return this.pagedItems = newFoods.slice(pager.startIndex, pager.endIndex + 1);
    //console.log(this.pagedItems);
  }
}
