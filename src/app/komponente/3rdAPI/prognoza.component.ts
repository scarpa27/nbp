import { Component, OnInit } from '@angular/core';
import {PloviloService} from "../../servisi/plovilo.service";
import {Prognoza} from "../../klase/prognoza.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-prognoza',
  templateUrl: './prognoza.component.html',
  styleUrls: ['./prognoza.component.css']
})
export class PrognozaComponent implements OnInit {

    prognoza: Prognoza = new Prognoza();
    supscription: BehaviorSubject<Prognoza> = new BehaviorSubject<Prognoza>(this.prognoza);

  constructor(public ps: PloviloService) { }

  ngOnInit(): void {
      this.supscription=this.ps.getPrognozaAPI();
      this.supscription.subscribe(r => this.prognoza=r);
  }

}
