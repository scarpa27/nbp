import {Component, OnInit} from '@angular/core';
import {Mjesto} from "../../../klase/mjesto.model";
import {Adresa} from "../../../klase/adresa.model";
import {Drzava} from "../../../klase/drzava.model";
import {ActivatedRoute} from "@angular/router";
import {ResponseService} from "../../../servisi/response.service";
import {PointService} from "../../../servisi/point.service";

@Component({
    selector: 'app-ae-adresa',
    templateUrl: './ae-adresa.component.html',
    styleUrls: ['./ae-adresa.component.css']
})
export class AeAdresaComponent implements OnInit {

    _id: number = 0;
    _editing: boolean = false;
    adresa: Adresa = new Adresa();

    mjesta: Mjesto[] = [];
    mjestasva: Mjesto[] = [];
    drzave: Drzava[] = [];

    editNaziv: string = "";
    editMjesto_id: number = 0;
    editDrzava_id: number = 0;

    constructor(
        private route: ActivatedRoute,
        private servis: ResponseService,
        public goto: PointService
    ) {
    }

    ngOnInit(): void {
        this._id = this.route.snapshot.params['id'];
        this._editing = this._id != undefined;

        this.listaDrzava();
        this.listaMjesta();

        if (this._editing) {
            this.servis.getAdresaAPI(this._id)
                .subscribe(r => {
                    this.adresa = r;
                    this.editNaziv = this.adresa.adresa;
                    this.editMjesto_id = this.adresa.mjesto_id
                });
        }
    }

    mjestaPoDrzavi(): void {
        this.mjesta = this.mjestasva.filter(
            r => r.drzava_id == this.editDrzava_id
        );
    }

    listaMjesta(): void {
        this.servis.getMjestaAPI()
            .subscribe(r => {
                this.mjestasva = r;
                this.mjestaPoDrzavi();
            });
    }

    listaDrzava(): void {
        this.servis.getDrzaveAPI()
            .subscribe(r => this.drzave = r);
    }

    saveChange(): void {
        this.servis.putAdresaAPI(this.editMjesto_id, this.editNaziv, this._id);
    }

    saveAsNew(): void {
        this.servis.postAdresaAPI(this.editMjesto_id, this.editNaziv);
    }

}
