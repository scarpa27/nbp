import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {PocetakComponent} from "./pocetak/pocetak.component";
import {Z1Component} from "./zadatak/z1/z1.component";
import {Z2Component} from "./zadatak/z2/z2.component";
import {Z3Component} from "./zadatak/z3/z3.component";
import {Z1_1Component} from "./zadatak/z1/z1_1/z1_1.component";
import {D1Component} from "./zadatak/d1/d1.component";
import { SerijaComponent } from './zadatak/d1/serija.component';
import { SorterPipe } from './zadatak/z4/sorter.pipe';
import {Z4Component} from "./zadatak/z4/Z4.component";
import {Z4detaljiComponent} from "./zadatak/z4/Z4detalji.component";
import {FilterPipe} from "./zadatak/z4/filter.pipe";
import { SortPipe } from './zadatak/d1/sort.pipe';
import { FiltPipe } from './zadatak/d1/filt.pipe';
import { PloviloComponent } from './plovilo/plovilo/plovilo.component';


@NgModule({
  declarations: [
    AppComponent,
    PocetakComponent,
    Z1Component,
    Z2Component,
    Z3Component,
    D1Component,
    Z1_1Component,
    SerijaComponent,
    Z4Component,
    Z4detaljiComponent,
    SorterPipe,
    FilterPipe,
    SortPipe,
    FiltPipe,
    PloviloComponent
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
