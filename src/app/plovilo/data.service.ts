import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly apiRoot = environment.API_URL + '/api/plovilo';
  constructor(private http:HttpClient) { }

  getPlovila() {
    return this.http.get(this.apiRoot);
  }

}
