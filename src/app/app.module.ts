import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {PocetakComponent} from "./pocetak/pocetak.component";
import {SorterPipe} from './zadatak/sorter.pipe';
import {Z4Component} from "./zadatak/Z4.component";
import {Z4detaljiComponent} from "./zadatak/Z4detalji.component";
import {FilterPipe} from "./zadatak/filter.pipe";
import {PlovilaComponent} from './plovila/plovila.component';
import {PloviloService} from "./plovila/plovilo.service";
import {DataService} from "./data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './header/header.component';
import {PloviloComponent} from './plovila/plovilo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AeVlasnikComponent } from './addEdit/ae-vlasnik.component';
import { AePloviloComponent } from './addEdit/ae-plovilo.component';
import { AeAdresaComponent } from './addEdit/ae-adresa.component';


@NgModule({
    declarations: [
        AppComponent,
        PocetakComponent,
        Z4Component,
        Z4detaljiComponent,
        SorterPipe,
        FilterPipe,
        PlovilaComponent,
        HeaderComponent,
        PloviloComponent,
        AeVlasnikComponent,
        AePloviloComponent,
        AeAdresaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [
        PloviloService,
        DataService,
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
