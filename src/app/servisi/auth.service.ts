import {Injectable} from '@angular/core';
import {map, Observable, Subject} from "rxjs";
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import {Operater} from "../klase/operater.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    errorEmitter: Subject<string> = new Subject<string>();
    authChange: Subject<boolean> = new Subject<boolean>();
    private operater: Operater | undefined;
    private token: string | null | undefined;

    constructor(private ds: ApiService, private router: Router) {
    }

    login(cred: { id: string, pass: string }) {
        console.log(cred);
        this.ds.postCred(cred.id, cred.pass)
            .subscribe(a => {
                // @ts-ignore
                let n = a['resp']['mess'];
                this.errorEmitter.next(n < 3 ? n < 2 ? "" : "Kriv ID" : "Kriva lozinka");
                // @ts-ignore
                let o = a['resp']['rows'];
                // @ts-ignore
                this.operater.oib = o.oib;
                // @ts-ignore
                this.operater.ovlast_id = o.level;
                // @ts-ignore
                this.token = a['resp']['token'];
                localStorage.setItem('token', <string>this.token);
                this.authChange.next(true);
                this.router.navigate(['/']).then();
            });
    }

    logout() {
        this.operater = new Operater();
        this.token = "";
        localStorage.removeItem("token");
        this.authChange.next(false);
        this.router.navigate(['login']).then();
    }

    reg(cred: {ime: string, prezime: string, ovlast_id: number, oib: string, sifra: string}) {
        console.log("auth serv reg");
        console.log(cred);

        this.ds.regCred(cred)
            .subscribe();

    }

    getToken() {
        this.token = this.token != undefined ? this.token : localStorage.getItem("token") ? localStorage.getItem("token") : undefined;

        return this.token;
    }

    getOperater() {
        if (this.isAuth()) return {...this.operater};
        else return null;
    }

    isAuth() {
        return this.operater != null;
    }

    ja() {
        if (!this.getToken()) {
            return new Observable(o => {
                o.next({status: 100});
            });
        }


        return this.ds.getJa().pipe(map(r => {
            if (r.status == 200) {
                this.operater = r.user;
                this.authChange.next(true);
            }
            return r;
        }));
    }


}
