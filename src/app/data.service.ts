import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {join} from '@fireflysemantics/join';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    readonly apiRoot = join(environment.API_URL, '/api/plovilo');

    constructor(private http: HttpClient) {
    }

    getPlovila() {
        return this.http.get(this.apiRoot);
    }

    getPlovilo(id: number) {
        return this.http.get(join(this.apiRoot, id.toString()))
    }

}
