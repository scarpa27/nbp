import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pocetak',
    templateUrl: './pocetak.component.html',
    styleUrls: ['./pocetak.component.css']
})
export class PocetakComponent implements OnInit {

    zadatak = [
        {"ime": "Labos 4", "lok": "z4", "kat": ""},
        {"ime": "Lista plovila", "lok": "plovilo", "kat": ""},
        {"ime": "Pregled rezervacija", "lok": "", "kat":""},
        {"ime": "Nova rezervacija", "lok": "", "kat": ""},
        {"ime": "Novi račun", "lok": "", "kat": ""},
        {"ime": "", "lok": "", "kat": ""},
        {"ime": "", "lok": "", "kat": ""},
        {"ime": "", "lok": "", "kat": ""},
        {"ime": "", "lok": "", "kat": ""},
        {"ime": "", "lok": "", "kat": ""}];


    constructor() {
    }

    ngOnInit() {
    }
}
