import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetak',
  templateUrl: './pocetak.component.html',
  styleUrls: ['./pocetak.component.css']
})
export class PocetakComponent implements OnInit {

  zadatak = [
    {"ime":"Labos 1","lok":"z1","kat":"labosi"},
    {"ime":"Labos 2","lok":"z2","kat":"labosi"},
    {"ime":"Labos 3","lok":"z3","kat":"dodatno"}];

  constructor() { }

  ngOnInit() {
  }

  //country-detail route
      //kao child route
      //country-detail component

}
