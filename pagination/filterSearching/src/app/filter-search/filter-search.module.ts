import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { filterSearch } from './filterSearch';

@NgModule({
  declarations: [filterSearch],
  
  imports: [
    CommonModule
  ],
  exports:[
    filterSearch
  ]
})
export class FilterSearchModule { }
