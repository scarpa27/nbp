import {Component, OnDestroy, OnInit} from '@angular/core';
import {Plovilo} from "./plovilo.model";
import {BehaviorSubject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PloviloService} from "./plovilo.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-plovilo',
  templateUrl: './plovilo.component.html',
  styleUrls: ['./plovilo.component.css']
})
export class PloviloComponent implements OnInit, OnDestroy {

  plovila : Plovilo[]=[];
  response:any;
  // @ts-ignore
  ploviloSubject : BehaviorSubject<Plovilo[]>;
  // @ts-ignore
  subscription : Subscription;





  constructor(
    private http:HttpClient,
    private ploviloService : PloviloService,
    private router:Router
  )
  {}




  ngOnInit(): void {
    console.log("inicijalizacija");

    this.ploviloService.getPlovilaFromAPI().subscribe(
      r => this.plovila=r
    )


    // this.plovila.push(new Plovilo(1,"toni","ante","mate"));


  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
