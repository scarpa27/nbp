import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly apiRoot = environment.API_URL + '/api/plovilo';
  constructor(private http:HttpClient) { }

  getPlovila():Observable<any[]> {
    return this.http.get<any>(this.apiRoot);
  }

  // addPlovilo(plovilo) {
  //   return this.http.post(this.apiRoot,plovilo)
  // }


}
