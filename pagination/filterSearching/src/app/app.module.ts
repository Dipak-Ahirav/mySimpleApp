import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterSearchModule } from './filter-search/filter-search.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PagerService } from './service/pager.service';
import { SetPageServiceService } from './set-page-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterSearchModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PagerService,
    SetPageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
