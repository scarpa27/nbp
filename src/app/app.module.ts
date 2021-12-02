import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {PocetakComponent} from "./pocetak/pocetak.component";
import {SortingPipe} from "./pocetak/sorting.pipe";
import {FilterPipe} from "./pocetak/filter.pipe";
import {Z1Component} from "./zadatak/z1/z1.component";
import {Z2Component} from "./zadatak/z2/z2.component";
import {Z3Component} from "./zadatak/z3/z3.component";
import {Z1_1Component} from "./zadatak/z1/z1_1/z1_1.component";
import {D1Component} from "./zadatak/d1/d1.component";


@NgModule({
  declarations: [
    AppComponent,
    PocetakComponent,
    Z1Component,
    Z2Component,
    Z3Component,
    D1Component,
    Z1_1Component,
    SortingPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
