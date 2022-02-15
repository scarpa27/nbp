import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../servisi/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './pocetak.component.html',
    styleUrls: ['./pocetak.component.css']
})
export class PocetakComponent implements OnInit {

    zadatak = [
        {"ime": "Lista plovila", "lok": "plovilo", "kat": ""},
        {"ime": "Novi operater", "lok": "/admin/novi_operater", "kat": "admin"},
        {"ime": "Novi račun", "lok": "", "kat": ""},
        {"ime": "Vremenska prognoza", "lok": "prognoza", "kat": ""},
        {"ime": "Odjavi se", "lok": "", "kat": ""},
        {"ime": "", "lok": "", "kat": ""},
        {"ime": "", "lok": "", "kat": ""},
        {"ime": "", "lok": "", "kat": ""}];


    constructor(public auth: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.auth.ja().subscribe(r => {
                // @ts-ignore
                if (r.status != 200) {
                    this.router.navigate(['login']).then();
                }
            }
        )
    }


}
