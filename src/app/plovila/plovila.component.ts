import {Component, OnDestroy, OnInit} from '@angular/core';
import {Plovilo} from "./plovilo.model";
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


}
