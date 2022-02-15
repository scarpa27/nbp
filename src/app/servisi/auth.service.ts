import {Injectable} from '@angular/core';
import {map, Observable, Subject} from "rxjs";
import {Router} from "@angular/router";
import {DataService} from "./data.service";
import {Operater} from "../klase/operater.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    errorEmitter: Subject<string> = new Subject<string>();
    authChange: Subject<boolean> = new Subject<boolean>();
    private operater: Operater | undefined;
    private token: string | null | undefined;

    constructor(private ds: DataService, private router: Router) {
    }

    login(cred: { id: string, pass: string }) {
        console.log(cred);
        this.ds.postCred(cred.id, cred.pass)
            .subscribe(a => {
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

        // @ts-ignore
        return this.ds.getJa().pipe(map((r: { status: number, user?: Operater }) => {
            if (r.status == 200) {
                this.operater = r.user;
                this.authChange.next(true);
            }
            return r;
        }));
    }


}
