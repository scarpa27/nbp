import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Plovilo} from "../klase/plovilo.model";
import {PloviloService} from "../plovila/plovilo.service";
import {Drzava} from "../klase/drzava.model";
import {Vlasnik} from "../klase/vlasnik.model";

@Component({
  selector: 'app-ae-plovilo',
  templateUrl: './ae-plovilo.component.html',
  styleUrls: ['./ae-plovilo.component.css']
})
export class AePloviloComponent implements OnInit {


    // // @ts-ignore
    // _form: FormGroup;
    _id: number = 0;
    _editing: boolean = false;
    plovilo: Plovilo = new Plovilo();
    drzave: Drzava[] = [];
    vlasnici: Vlasnik[] = [];

    editNaziv: string = "";
    editVlasnik_id: number = 0;
    editDrzava_id: number = 0;



  constructor(
      private route: ActivatedRoute,
      private router: Router,
      // private formBuilder: FormBuilder,
      public servis: PloviloService
  ) {
  }

  ngOnInit(): void {
      this._id = this.route.snapshot.params['id'];
      this._editing = this._id != undefined;

      this.listaDrzava();
      this.listaVlasnika();



      if (this._editing) {
          this.servis.getPloviloAPI(this._id)
              .subscribe(r => {
                  this.plovilo = r;
                  this.editNaziv = this.plovilo.naziv;
                  this.editDrzava_id = this.plovilo.drzava_reg_id;
                  this.editVlasnik_id = this.plovilo.musterija_id;
              });






      }
  }

  listaVlasnika() : void {
      this.servis.getVlasniciAPI()
          .subscribe(r => this.vlasnici = r);
  }

  listaDrzava() : void {
      this.servis.getDrzaveAPI()
          .subscribe(r => this.drzave = r);
  }

  printVlasnik() : void {
      console.log(this.editVlasnik_id);
  }

}
