import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {PocetakComponent} from "./komponente/home/pocetak.component";
import {PlovilaComponent} from "./komponente/view/plovila.component";
import {PloviloComponent} from "./komponente/view/plovilo.component";
import {AePloviloComponent} from "./komponente/addEdit/ae-plovilo.component";
import {AeVlasnikComponent} from "./komponente/addEdit/ae-vlasnik.component";
import {AeDrzavaComponent} from "./komponente/addEdit/toponim/ae-drzava.component";
import {AeMjestoComponent} from "./komponente/addEdit/toponim/ae-mjesto.component";
import {AeAdresaComponent} from "./komponente/addEdit/toponim/ae-adresa.component";
import {LoginComponent} from "./komponente/home/login.component";
import {PrognozaComponent} from "./komponente/3rdAPI/prognoza.component";
import {AuthGuard} from "./servisi/auth.guard";
import {BrisanjeComponent} from "./komponente/admin/crud/brisanje.component";
import {NewUserComponent} from "./komponente/admin/new-user/new-user.component";

const routes: Route[] = [
    {path: '', component: PocetakComponent},
    {path: 'plovilo', component: PlovilaComponent},
    {path: 'plovilo/:id', component: PloviloComponent},
    {path: 'add/plovilo', component: AePloviloComponent},
    {path: 'edit/plovilo/:id', component: AePloviloComponent},
    {path: 'add/vlasnik', component: AeVlasnikComponent},
    {path: 'edit/vlasnik/:id', component: AeVlasnikComponent},
    {path: 'add/drzava', component: AeDrzavaComponent},
    {path: 'edit/drzava/:id', component: AeDrzavaComponent},
    {path: 'add/mjesto', component: AeMjestoComponent},
    {path: 'edit/mjesto/:id', component: AeMjestoComponent},
    {path: 'add/adresa', component: AeAdresaComponent},
    {path: 'edit/adresa/:id', component: AeAdresaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'prognoza', component: PrognozaComponent},
    {path: 'admin', component: BrisanjeComponent, canActivate: [AuthGuard]},
    {path: 'admin/brisanje', component: BrisanjeComponent, canActivate: [AuthGuard]},
    {path: 'admin/novi_operater', component: NewUserComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
