import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Plovilo} from "./plovilo.model";
import {DataService} from "./data.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PloviloService {

  plovila : Plovilo[]=[];
  // @ts-ignore
  ploviloSubject : BehaviorSubject<Plovilo[]> = new BehaviorSubject<Plovilo[]>(null);


  constructor(private http:HttpClient, private dataService:DataService) {this.init(); }

  init() {
    this.dataService.getPlovila()
      .subscribe((res : any) => {
        this.plovila = res.plovila;
        console.log(res);
        this.ploviloSubject.next(this.plovila);
      })
  }

  getPlovilaFromAPI() {
    return this.ploviloSubject;
  }

  getPlovilo(_id:number) {
    return this.plovila.find(p => p.id);
  }

}
