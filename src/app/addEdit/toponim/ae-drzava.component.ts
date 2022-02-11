import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PloviloService} from "../../plovila/plovilo.service";
import {Drzava} from "../../klase/drzava.model";

@Component({
  selector: 'app-ae-drzava',
  templateUrl: './ae-drzava.component.html',
  styleUrls: ['./ae-drzava.component.css']
})
export class AeDrzavaComponent implements OnInit {

    _id: number = 0;
    _editing: boolean = false;
    drzava: Drzava = new Drzava();
    editNaziv: string = "";

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private servis: PloviloService
  ) { }

  ngOnInit(): void {
      this._id = this.route.snapshot.params['id'];
      this._editing = this._id != undefined;

      if (this._editing) {
          this.servis.getPloviloAPI(this._id)
              .subscribe(r => {
                  this.drzava = r;
                  this.editNaziv = this.drzava.drzava;
              });
      }

  }

  send() {
      this.servis.postDrzavaAPI(this.editNaziv);
  }

  save() {

    }

}
