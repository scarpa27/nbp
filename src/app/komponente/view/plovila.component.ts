import {Component, OnInit} from '@angular/core';
import {Plovilo} from "../../klase/plovilo.model";
import {ResponseService} from "../../servisi/response.service";
import {PointService} from "../../servisi/point.service";


@Component({
    selector: 'app-plovila',
    templateUrl: './plovila.component.html',
    styleUrls: ['./plovila.component.css']
})
export class PlovilaComponent implements OnInit {

    plovila: Plovilo[] = [];

    stupac: string = "id";
    obrnuto: boolean = false;
    f: string[] = ["", "", "", ""];


    constructor(private servis: ResponseService, public goto: PointService) {
    }

    ngOnInit(): void {
        this.servis.getPlovilaAPI().subscribe(
            r => this.plovila = r
        );
    }

    sortiranje(stup: string): void {
        if (stup === this.stupac) {
            this.obrnuto = !this.obrnuto;
        } else {
            this.obrnuto = false;
            this.stupac = stup;
        }
    }

    smjer(ime: string) {
        return ime == this.stupac ? this.obrnuto ? " ⬆️" : " ⬇️" : " 🟦";
    }
}
