import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {PocetakComponent} from "./pocetak/pocetak.component";
import {Z1Component} from "./zadatak/z1/z1.component";
import {Z2Component} from "./zadatak/z2/z2.component";
import {Z3Component} from "./zadatak/z3/z3.component";
import {Z1_1Component} from "./zadatak/z1/z1_1/z1_1.component";

const routes : Route[] = [
    {path:'',component:PocetakComponent},
  {path:'z1',component:Z1Component},
  {path:'z2',component:Z2Component},
  {path:'z3',component:Z3Component},
  {path:'z1/z1_1',component:Z1_1Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
