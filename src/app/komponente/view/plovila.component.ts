import {Component, OnInit} from '@angular/core';
import {Plovilo} from "../../klase/plovilo.model";
import {BehaviorSubject} from "rxjs";
import {PloviloService} from "../../servisi/plovilo.service";


@Component({
    selector: 'app-plovila',
    templateUrl: './plovila.component.html',
    styleUrls: ['./plovila.component.css']
})
export class PlovilaComponent implements OnInit {

    plovila: Plovilo[] = [];
    subscription: BehaviorSubject<Plovilo[]> = new BehaviorSubject<Plovilo[]>(this.plovila);

    stupac: string = "id";
    obrnuto: boolean = false;
    f: string[] = ["", "", "", ""];


    constructor(public servis: PloviloService) {
    }

    ngOnInit(): void {
        this.subscription = this.servis.getPlovilaAPI();

        this.subscription.subscribe(
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
