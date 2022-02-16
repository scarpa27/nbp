import {Component, OnInit} from '@angular/core';
import {ResponseService} from "../../../servisi/response.service";
import {Plovilo} from "../../../klase/plovilo.model";
import {Vlasnik} from "../../../klase/vlasnik.model";
import {Drzava} from "../../../klase/drzava.model";

@Component({
    selector: 'app-brisanje',
    templateUrl: './brisanje.component.html',
    styleUrls: ['./brisanje.component.css']
})
export class BrisanjeComponent implements OnInit {

    plovila: Plovilo[] = []
    vlasnici: Vlasnik[] = [];
    drzave: Drzava[] = [];

    delPlovilo_id: number = 0;
    delVlasnik_id: number = 0;
    delDrzava_id: number = 0;

    constructor(public ps: ResponseService) {
    }

    ngOnInit(): void {
        this.getplovila();
        this.getvlasnici();
        this.getdrzave();
    }

    getplovila() {
        this.ps.getPlovilaAPI().subscribe(a => this.plovila = a);
    }

    delPlovilo() {
        this.ps.deletePloviloAPI(this.delPlovilo_id);
        this.getplovila();
        this.delPlovilo_id = 0;
    }

    getvlasnici() {
        this.ps.getVlasniciAPI().subscribe(a => this.vlasnici = a);
    }

    delVlasnik() {
        this.ps.deleteVlasnikAPI(this.delVlasnik_id);
        this.getvlasnici();
        this.delVlasnik_id = 0;
    }

    getdrzave() {
        this.ps.getDrzaveAPI().subscribe(a => this.drzave = a);
    }

    delDrzava() {
        this.ps.deleteDrzavaAPI(this.delDrzava_id);
        this.getdrzave();
        this.delDrzava_id = 0;
    }

}
