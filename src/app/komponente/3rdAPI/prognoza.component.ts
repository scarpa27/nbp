import { Component, OnInit } from '@angular/core';
import {ResponseService} from "../../servisi/response.service";
import {Prognoza} from "../../klase/prognoza.model";
import {BehaviorSubject} from "rxjs";
import {PointService} from "../../servisi/point.service";

@Component({
  selector: 'app-prognoza',
  templateUrl: './prognoza.component.html',
  styleUrls: ['./prognoza.component.css']
})
export class PrognozaComponent implements OnInit {

    prognoza: Prognoza = new Prognoza();
    supscription: BehaviorSubject<Prognoza> = new BehaviorSubject<Prognoza>(this.prognoza);

  constructor(private ps: ResponseService, public goto: PointService) { }

  ngOnInit(): void {
      this.supscription=this.ps.getPrognozaAPI();
      this.supscription.subscribe(r => this.prognoza=r);
  }

}
