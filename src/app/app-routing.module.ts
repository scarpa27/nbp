import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {PocetakComponent} from "./pocetak/pocetak.component";
import {Z4Component} from "./zadatak/Z4.component";
import {Z4detaljiComponent} from "./zadatak/Z4detalji.component";
import {PlovilaComponent} from "./plovila/plovila.component";
import {PloviloComponent} from "./plovila/plovilo.component";

const routes: Route[] = [
    {path: '', component: PocetakComponent},
    {path: 'z4', component: Z4Component},
    {path: 'z4/:jmbag', component: Z4detaljiComponent},
    {path: 'plovilo', component: PlovilaComponent},
    {path: 'plovilo/:id', component: PloviloComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
