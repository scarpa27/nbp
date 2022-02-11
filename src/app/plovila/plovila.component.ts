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


    constructor(private ploviloService: PloviloService) {
    }

    ngOnInit(): void {
        this.subscription = this.ploviloService.getPlovilaAPI();

        this.subscription.subscribe(
            r => this.plovila = r
        )
    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }

    goToLink(link:string) {
        console.log("jea");
        let a = window.open(link, "_blank","resizable=no, toolbar=no, menubar=no location=no");

        if (a) {
            console.log(a);
            a.focus();
        }
    }


}
