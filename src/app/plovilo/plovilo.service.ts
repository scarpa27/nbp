import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plovilo} from "./plovilo.model";
import {DataService} from "./data.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PloviloService {

  plovila : any[]=[];
  response:any;
  // @ts-ignore
  ploviloSubject : BehaviorSubject<Plovilo[]> = new BehaviorSubject<Plovilo[]>(null);


  constructor(private http:HttpClient, private dataService:DataService)
  {this.init(); }

  init() {
    this.dataService.getPlovila()
      .subscribe((res ) => {
        // @ts-ignore
        this.response=res;
        console.log(res.toString());
        this.ploviloSubject.next(this.plovila);
      });

    console.log(this.dataService.getPlovila().toString());
  }

  getPlovilaFromAPI() {
    return this.ploviloSubject;
  }

  getPlovilo(_id:number) {
    return this.plovila.find(p => p.id);
  }

  getResponse() {return this.response;}

}
