// import { Pipe, Injectable, PipeTransform } from '@angular/core';
// import { SetPageServiceService } from '../set-page-service.service';


// @Pipe({
//     name:'filter'
// })

// @Injectable()
// export class filterSearch implements PipeTransform{
//     constructor(private setPager:SetPageServiceService){}
//     transform(items:any[],field:string ,value:string):any[]{
//         if(!items){
//             return[];
//         }
//         if(!field || !value){
     
//             return items;
//         }

//         return items.filter(singleItem=>
//             singleItem[field].toLowerCase().includes(value.toLowerCase())
//             );
//     }
// }



import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { SetPageServiceService } from '../set-page-service.service';
import { PagerService } from '../service';


@Pipe({
    name:'filter'
})

@Injectable()
export class filterSearch implements PipeTransform{
    dipak:any[];
    pager: any = {};
    pagedItems: any[];
    constructor(private setPager:SetPageServiceService,private pagerService:PagerService){}
    transform(items:any[],field:string ,value:string):any[]{
        console.log(items);
        if(!items){
            return[];
        }
        if(!field || !value){
           
            return items;
        }
        // this.pager = this.pagerService.getPager(items.length, 1);
       
        // this.pagedItems=this.setPager.setPage1(items,this.pager);
       
          this.dipak=items.filter(singleItem=>
           singleItem[field].toLowerCase().includes(value.toLowerCase())
             );
console.log(this.dipak);
            this.pager = this.pagerService.getPager(this.dipak.length, 1);
    //    console.log(this.pager);
        // this.pagedItems=this.setPager.setPage1(this.dipak,this.pager);
         console.log(this.pagedItems)
            return this.pagedItems;
           
    }
}