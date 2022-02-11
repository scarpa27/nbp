import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {PocetakComponent} from "./pocetak/pocetak.component";
import {Z4Component} from "./zadatak/Z4.component";
import {Z4detaljiComponent} from "./zadatak/Z4detalji.component";
import {PlovilaComponent} from "./plovila/plovila.component";
import {PloviloComponent} from "./plovila/plovilo.component";
import {AePloviloComponent} from "./addEdit/ae-plovilo.component";
import {AeVlasnikComponent} from "./addEdit/ae-vlasnik.component";
import {AeDrzavaComponent} from "./addEdit/toponim/ae-drzava.component";
import {AeMjestoComponent} from "./addEdit/toponim/ae-mjesto.component";
import {AeAdresaComponent} from "./addEdit/toponim/ae-adresa.component";

const routes: Route[] = [
    {path: '', component: PocetakComponent},
    {path: 'z4', component: Z4Component},
    {path: 'z4/:jmbag', component: Z4detaljiComponent},
    {path: 'plovilo', component: PlovilaComponent},
    {path: 'plovilo/:id', component: PloviloComponent},
    {path: 'add/plovilo', component: AePloviloComponent},
    {path: 'edit/plovilo/:id', component: AePloviloComponent},
    {path: 'add/vlasnik', component: AeVlasnikComponent},
    {path: 'edit/vlasnik/:id', component: AeVlasnikComponent}
    , {path: 'add/drzava', component: AeDrzavaComponent}
    , {path: 'edit/drzava/:id', component: AeDrzavaComponent}
    , {path: 'add/mjesto', component: AeMjestoComponent}
    , {path: 'edit/mjesto/:id', component: AeMjestoComponent}
    , {path: 'add/adresa', component: AeAdresaComponent}
    , {path: 'edit/adresa/:id', component: AeAdresaComponent}
    // , {path: '', component: }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
