import { Component } from '@angular/core';
import { FoodItem } from './model/foodItem';

import { NewServiceService } from './new-service.service';
import { PagerService } from './service/pager.service';
import { filterSearch } from './filter-search/filterSearch';
import { SetPageServiceService } from './set-page-service.service';
import { RouteConfigLoadEnd } from '@angular/router';



@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

warning:boolean=false;
  searchPager:boolean=false;
  allpager:boolean=false;
  foods:FoodItem[];
  public seraching:String="";
    // array of all items to be paged
    valnew:filterSearch[];
    // pager object
    pager: any = {};
    newpager: any = {};
    // paged items
    pagedItems: any[];
    newPagedItem:any[];
    field='name';

  constructor(private Httpservice:NewServiceService,private pagerService:PagerService,private setPager:SetPageServiceService){}

ngOnInit(){

    this.Httpservice.getData().subscribe(data=>{
      this.foods=data;
      // this.pagedItems=this.foods;
      //  console.log(this.foods);
      this.setPage(1);
      this.allpager=true;
      this.searchPager=false;
      //  console.log(this.dipak);
    });
  
}

setPage(page: number) {
  // get pager object from service
 
  this.pager = this.pagerService.getPager(this.foods.length, page);

  this.pagedItems = this.setPager.setPageNew(this.foods,this.pager);

  // get current page of items
  
}

onKey(searchString:string){
  // transform(this.foods,field:string ,value:string):any[]{}
    if(searchString!=""){
            if(!this.foods){
              return [];
            }
       
            if(!this.field || !searchString){
          
                return this.foods;
              
            }
                  
            this.pagedItems= this.foods.filter(singleItem=>
                singleItem[this.field].toLowerCase().includes(searchString.toLowerCase()),
            );
         
            
            this.newPagedItem=this.pagedItems;
       
            this.newSetPage(1);

            this.allpager=false;
            this.searchPager=true;
      }
      else{
        this.ngOnInit();
      }
          //  console.log(this.dipak);
          //   this.pager = this.pagerService.getPager(this.dipak.length, 1);
          //    console.log(this.pager);
          //       this.pagedItems=this.setPager.setPage1(this.dipak,this.pager);
      }

    newSetPage(page: number) {
          // get pager object from service
      
          this.newpager = this.pagerService.getPager(this.newPagedItem.length, page);
  
          this.pagedItems = this.setPager.setPageNew(this.newPagedItem,this.newpager);
       
          // get current page of items
          
    }
}

