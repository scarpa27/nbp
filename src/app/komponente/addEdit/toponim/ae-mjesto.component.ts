import {Component, OnInit} from '@angular/core';
import {Drzava} from "../../../klase/drzava.model";
import {ActivatedRoute} from "@angular/router";
import {ResponseService} from "../../../servisi/response.service";
import {Mjesto} from "../../../klase/mjesto.model";
import {PointService} from "../../../servisi/point.service";

@Component({
    selector: 'app-ae-mjesto',
    templateUrl: './ae-mjesto.component.html',
    styleUrls: ['./ae-mjesto.component.css']
})
export class AeMjestoComponent implements OnInit {

    _id: number = 0;
    _editing: boolean = false;
    mjesto: Mjesto = new Mjesto();
    drzave: Drzava[] = [];
    editNaziv: string = "";
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

        if (this._editing) {
            this.servis.getMjestoAPI(this._id)
                .subscribe(r => {
                    this.mjesto = r;
                    this.editNaziv = this.mjesto.naziv;
                    this.editDrzava_id = this.mjesto.drzava_id;
                })
        }
    }

    listaDrzava(): void {
        this.servis.getDrzaveAPI()
            .subscribe(r => this.drzave = r);
    }

    saveChange(): void {
        this.servis.putMjestoAPI(this.editNaziv, this.editDrzava_id, this._id);
    }

    saveAsNew(): void {
        this.servis.postMjestoAPI(this.editNaziv, this.editDrzava_id);
    }

}
