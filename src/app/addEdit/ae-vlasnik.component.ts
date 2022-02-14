import {Component, OnInit} from '@angular/core';
import {Vlasnik} from "../klase/vlasnik.model";
import {Drzava} from "../klase/drzava.model";
import {Mjesto} from "../klase/mjesto.model";
import {Adresa} from "../klase/adresa.model";
import {ActivatedRoute} from "@angular/router";
import {PloviloService} from "../plovila/plovilo.service";

@Component({
    selector: 'app-ae-vlasnik',
    templateUrl: './ae-vlasnik.component.html',
    styleUrls: ['./ae-vlasnik.component.css']
})
export class AeVlasnikComponent implements OnInit {
    _id: number = 0;
    _editing: boolean = false;
    vlasnik: Vlasnik = new Vlasnik();

    drzave: Drzava[] = [];
    mjesta: Mjesto[] = [];
    mjestaSva: Mjesto[] = [];
    adrese: Adresa[] = [];
    adreseSve: Adresa[] = [];

    editIme: string = "";
    editPrezime: string = "";
    editOIB: string = "";
    editAdresa_id: number = 0;
    editMjesto_id: number = 0;
    editDrzava_id: number = 0;


    constructor(
        private route: ActivatedRoute,
        public servis: PloviloService
    ) {
    }

    ngOnInit(): void {
        this._id = this.route.snapshot.params['id'];
        this._editing = this._id != undefined;

        this.listaAdresa();

    }

    listaDrzava(): void {
        this.servis.getDrzaveAPI()
            .subscribe(r => this.drzave = r);
    }

    listaMjesta(): void {
        this.servis.getMjestaAPI()
            .subscribe(r => this.mjestaSva = r);
        this.mjestaPoDrzavi();
    }

    listaAdresa(): void {
        this.listaDrzava();
        this.listaMjesta();
        this.mjestaPoDrzavi();
        this.adresePoMjestu();
        this.servis.getAdreseAPI()
            .subscribe(r => this.adreseSve = r);
        this.adresePoMjestu()
    }

    mjestaPoDrzavi(): void {
        this.mjesta = this.mjestaSva.filter(
            r => r.drzava_id == this.editDrzava_id
        );
    }

    adresePoMjestu(): void {
        this.adrese = this.adreseSve.filter(
            r => r.mjesto_id == this.editMjesto_id
        );
    }

    saveChange() {
        this.servis.putVlasnikAPI(this.editIme, this.editPrezime, this.editAdresa_id, this.editOIB, this._id);
    }

    saveAsNew() {
        this.servis.postVlasnikAPI(this.editIme, this.editPrezime, this.editAdresa_id, this.editOIB);
    }

}
