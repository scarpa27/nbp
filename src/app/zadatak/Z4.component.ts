import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studenti',
  templateUrl: './Z4.component.html',
  styleUrls: ['./Z4.component.css']
})
export class Z4Component implements OnInit {

  filt : any;
  stupac : string = "";
  obrnuto: boolean=false;

  studenti = [
    {ime: "Toni", jmbag:"0082058337", ects:122, prosjek:3.7},
    {ime: "Jere", jmbag:"4206996024", ects:93, prosjek:4.0},
    {ime: "Kate", jmbag:"0401920401", ects:12, prosjek: 2.1},
    {ime: "Slavoljub", jmbag:"7449826103", ects: 121, prosjek: 4.1},
    {ime: "Zanko", jmbag: "9009182918", ects: 156, prosjek: 2.7},
    {ime: "Milo", jmbag: "0090080071", ects: 44, prosjek: 3.3},
    {ime: "Melkior", jmbag:"1138371620", ects: 101, prosjek: 3.1},
    {ime: "Buga", jmbag:"9991825419", ects: 13, prosjek: 5.0 },
    {ime: "Srećna", jmbag:"1541012319", ects:175, prosjek: 2.8}
  ]


  constructor() { }

  ngOnInit(): void {
  }

  sortiranje(stup:string) : void {
    if (stup === this.stupac) {
      this.obrnuto = !this.obrnuto;
    }
    else {
      this.obrnuto = false;
      this.stupac = stup;
    }
  }
}
