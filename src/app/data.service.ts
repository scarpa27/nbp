import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {join} from '@fireflysemantics/join';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    readonly apiRoot = join(environment.API_URL, '/api');

    constructor(private http: HttpClient) {
    }

    getPlovila() {
        return this.http.get(join(this.apiRoot, "plovilo"));
    }

    getPlovilo(id: number) {
        return this.http.get(join(this.apiRoot, "plovilo", id.toString()));
    }

    getDrzave() {
        return this.http.get(join(this.apiRoot,"drzave"));
    }

    getVlasnici() {
        return this.http.get(join(this.apiRoot,"vlasnik"))
    }

}
