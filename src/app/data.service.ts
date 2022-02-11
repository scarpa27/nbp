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
        return this.http.get(join(this.apiRoot,"drzava"));
    }

    getDrzava(_id: number) {
        return this.http.get(join(this.apiRoot,"drzava",_id.toString()))
    }

    postDrzava(_drzava: string) {
        console.log("iz data servisa");
        let body = {drzava: _drzava};
        console.log(body);
        let a=this.http.post(join(this.apiRoot,"drzava"),{drzava: _drzava});
        console.log(a);
        return a;
    }

    getVlasnici() {
        return this.http.get(join(this.apiRoot,"vlasnik"))
    }

}
