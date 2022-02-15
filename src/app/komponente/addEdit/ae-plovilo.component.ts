import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Plovilo} from "../../klase/plovilo.model";
import {PloviloService} from "../../servisi/plovilo.service";
import {Drzava} from "../../klase/drzava.model";
import {Vlasnik} from "../../klase/vlasnik.model";

@Component({
    selector: 'app-ae-plovilo',
    templateUrl: './ae-plovilo.component.html',
    styleUrls: ['./ae-plovilo.component.css']
})
export class AePloviloComponent implements OnInit {

    _id: number = 0;
    _editing: boolean = false;
    plovilo: Plovilo = new Plovilo();
    drzave: Drzava[] = [];
    vlasnici: Vlasnik[] = [];

    editNaziv: string = "";
    editVlasnik_id: number = 0;
    editDrzava_id: number = 0;


    constructor(
        private route: ActivatedRoute,
        // private formBuilder: FormBuilder,
        public servis: PloviloService
    ) {
    }

    ngOnInit(): void {
        this._id = this.route.snapshot.params['id'];
        this._editing = this._id != undefined;

        this.listaDrzava();
        this.listaVlasnika();

        if (this._editing) {
            this.servis.getPloviloAPI(this._id)
                .subscribe(r => {
                    this.plovilo = r;
                    this.editNaziv = this.plovilo.naziv;
                    this.editDrzava_id = this.plovilo.drzava_reg_id;
                    this.editVlasnik_id = this.plovilo.musterija_id;
                });
        }
    }

    saveChange(): void {
        this.servis.putPloviloAPI(this.editDrzava_id, this.editVlasnik_id, this.editNaziv, this._id);
        window.close();
    }

    saveAsNew(): void {
        this.servis.postPloviloAPI(this.editDrzava_id, this.editVlasnik_id, this.editNaziv);
        window.close();
    }

    listaVlasnika(): void {
        this.servis.getVlasniciAPI()
            .subscribe(r => this.vlasnici = r);
    }

    listaDrzava(): void {
        this.servis.getDrzaveAPI()
            .subscribe(r => this.drzave = r);
    }
}
