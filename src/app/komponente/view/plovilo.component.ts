import {Component, OnInit} from '@angular/core';
import {Plovilo} from "../../klase/plovilo.model";
import {BehaviorSubject} from "rxjs";
import {ResponseService} from "../../servisi/response.service";
import {ActivatedRoute} from "@angular/router";
import {PointService} from "../../servisi/point.service";

@Component({
    selector: 'app-plovilo',
    templateUrl: './plovilo.component.html',
    styleUrls: ['./plovilo.component.css']
})
export class PloviloComponent implements OnInit {

    plovilo: Plovilo = new Plovilo();
    subscription: BehaviorSubject<Plovilo> = new BehaviorSubject<Plovilo>(this.plovilo);

    constructor(private servis: ResponseService, private route: ActivatedRoute, public goto: PointService) {
    }

    ngOnInit(): void {
        this.servis.getPloviloAPI(this.route.snapshot.params['id'])
            .subscribe(
            r => this.plovilo = r
            );
    }
}
