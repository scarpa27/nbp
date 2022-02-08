import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plovilo} from "./plovilo.model";
import {DataService} from "./data.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PloviloService {

  plovila : Plovilo[]=[];
  response:any;
  plovilaSubject : BehaviorSubject<Plovilo[]> = new BehaviorSubject<Plovilo[]>(this.plovila);


  constructor(private http:HttpClient, private dataService:DataService)
  {this.init(); }

  init() {

    this.dataService.getPlovila().subscribe(a => {
        // @ts-ignore
        this.plovila = a["resp"][0];
        this.plovilaSubject.next(this.plovila);
      }
    );

    console.log("toni as");


    // this.dataService.getPlovila()
    //   .subscribe((res ) => {
    //     // @ts-ignore
    //     this.response=res;
    //     this.ploviloSubject.next(this.plovila);
    //   });
  }

  getPlovilaFromAPI() {
    return this.plovilaSubject;
  }

  getPlovilo(_id:number) {
    // return this.plovila.find(p => p.id);
  }

  getResponse() {return this.response;}

}
