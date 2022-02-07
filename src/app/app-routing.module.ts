import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {PocetakComponent} from "./pocetak/pocetak.component";
import {Z1Component} from "./zadatak/z1/z1.component";
import {Z2Component} from "./zadatak/z2/z2.component";
import {Z3Component} from "./zadatak/z3/z3.component";
import {Z1_1Component} from "./zadatak/z1/z1_1/z1_1.component";
import {D1Component} from "./zadatak/d1/d1.component";
import {SerijaComponent} from "./zadatak/d1/serija.component";
import {Z4Component} from "./zadatak/z4/Z4.component";
import {Z4detaljiComponent} from "./zadatak/z4/Z4detalji.component";
import {PloviloComponent} from "./plovilo/plovilo/plovilo.component";

const routes : Route[] = [
    {path:'',component:PocetakComponent},
  {path:'z1',component:Z1Component},
  {path:'z2',component:Z2Component},
  {path:'z3',component:Z3Component},
  {path:'d1',component:D1Component},
  {path:'d1/:id',component:SerijaComponent},
  {path:'z1/z1_1',component:Z1_1Component},
  {path:'z4',component:Z4Component},
  {path:'z4/:jmbag',component:Z4detaljiComponent},

  {path:'plovilo',component:PloviloComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
