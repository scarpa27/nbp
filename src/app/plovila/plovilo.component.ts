import {Component, OnDestroy, OnInit} from '@angular/core';
import {Plovilo} from "../klase/plovilo.model";
import {BehaviorSubject} from "rxjs";
import {PloviloService} from "./plovilo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-plovilo',
    templateUrl: './plovilo.component.html',
    styleUrls: ['./plovilo.component.css']
})
export class PloviloComponent implements OnInit, OnDestroy {

    plovilo: Plovilo = new Plovilo();
    subscription: BehaviorSubject<Plovilo> = new BehaviorSubject<Plovilo>(this.plovilo);

    constructor(public servis: PloviloService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.subscription = this.servis.getPloviloAPI(this.route.snapshot.params['id']);

        this.subscription.subscribe(
            r => {this.plovilo = r;
                }
        )
    }

    ngOnDestroy(): void {
    }

}
