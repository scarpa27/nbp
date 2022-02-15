import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../servisi/auth.service";
import {DataService} from "../../../servisi/data.service";
import {Ovlast} from "../../../klase/ovlast.model";
import {BehaviorSubject} from "rxjs";
import {PloviloService} from "../../../servisi/plovilo.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

    error: string = "";
    login: FormGroup;
    editOvlast_id=0;
    ovlasti: Ovlast[] = [];
    subscription: BehaviorSubject<Ovlast[]>= new BehaviorSubject<Ovlast[]>(this.ovlasti);

  constructor(private auth: AuthService, private servis: DataService, public ps: PloviloService) {
      this.login = new FormGroup({
          'ime': new FormControl(null,[Validators.required]),
          'prezime': new FormControl(null,[Validators.required]),
          'sifra': new FormControl(null,[Validators.required]),
          'oib': new FormControl(null,[Validators.required]),
          'ovlast_id': new FormControl(null,[Validators.required])
      });
  }

  ngOnInit(): void {
      this.getOvlasti();

      this.auth.errorEmitter.next("");
      this.auth.errorEmitter.subscribe(err => {
          this.error = err;
      });
  }

  getOvlasti(): void {
      this.servis.getOvlasti().subscribe(r => {
          // @ts-ignore
          this.ovlasti = r["resp"];
          this.subscription
              .next(this.ovlasti);
      });
      this.subscription.subscribe(r => this.ovlasti = r);
  }

  reg(): void {
      this.auth.reg(this.login.value);
  }

}
