import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {PocetakComponent} from "./pocetak/pocetak.component";
import { SorterPipe } from './zadatak/sorter.pipe';
import {Z4Component} from "./zadatak/Z4.component";
import {Z4detaljiComponent} from "./zadatak/Z4detalji.component";
import {FilterPipe} from "./zadatak/filter.pipe";
import { PloviloComponent } from './plovilo/plovilo.component';
import {PloviloService} from "./plovilo/plovilo.service";
import {DataService} from "./plovilo/data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PocetakComponent,
    Z4Component,
    Z4detaljiComponent,
    SorterPipe,
    FilterPipe,
    PloviloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PloviloService,
    DataService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
