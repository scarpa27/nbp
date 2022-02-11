import {Component, OnDestroy, OnInit} from '@angular/core';
import {Plovilo} from "../klase/plovilo.model";
import {BehaviorSubject} from "rxjs";
import {PloviloService} from "./plovilo.service";


@Component({
    selector: 'app-plovila',
    templateUrl: './plovila.component.html',
    styleUrls: ['./plovila.component.css']
})
export class PlovilaComponent implements OnInit, OnDestroy {

    plovila: Plovilo[] = [];
    subscription: BehaviorSubject<Plovilo[]> = new BehaviorSubject<Plovilo[]>(this.plovila);


    constructor(public servis: PloviloService) {
    }

    ngOnInit(): void {
        this.subscription = this.servis.getPlovilaAPI();

        this.subscription.subscribe(
            r => this.plovila = r
        )
    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }



}
