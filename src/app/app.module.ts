import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PocetakComponent} from "./komponente/home/pocetak.component";
import {SorterPipe} from './pipe/sorter.pipe';
import {FilterPipe} from "./pipe/filter.pipe";
import {PlovilaComponent} from './komponente/view/plovila.component';
import {PloviloService} from "./servisi/plovilo.service";
import {DataService} from "./servisi/data.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './komponente/header/header.component';
import {PloviloComponent} from './komponente/view/plovilo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AeVlasnikComponent } from './komponente/addEdit/ae-vlasnik.component';
import { AePloviloComponent } from './komponente/addEdit/ae-plovilo.component';
import { AeAdresaComponent } from './komponente/addEdit/toponim/ae-adresa.component';
import { AeMjestoComponent } from './komponente/addEdit/toponim/ae-mjesto.component';
import { AeDrzavaComponent } from './komponente/addEdit/toponim/ae-drzava.component';
import { LoginComponent } from './komponente/home/login.component';
import {AuthService} from "./servisi/auth.service";
import {InterceptService} from "./servisi/intercept.service";
import { PrognozaComponent } from './komponente/3rdAPI/prognoza.component';
import {AuthGuard} from "./servisi/auth.guard";
import { AdminComponent } from './komponente/admin/admin.component';
import { BrisanjeComponent } from './komponente/admin/crud/brisanje.component';


@NgModule({
    declarations: [
        AppComponent,
        PocetakComponent,
        SorterPipe,
        FilterPipe,
        PlovilaComponent,
        HeaderComponent,
        PloviloComponent,
        AeVlasnikComponent,
        AePloviloComponent,
        AeAdresaComponent,
        AeMjestoComponent,
        AeDrzavaComponent,
        LoginComponent,
        PrognozaComponent,
        AdminComponent,
        BrisanjeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule
    ],
    providers: [
        PloviloService,
        DataService,
        HttpClient,
        AuthService,
        AuthGuard,
        {provide: HTTP_INTERCEPTORS,
        useClass: InterceptService,
        multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
