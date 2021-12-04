import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetak',
  templateUrl: './pocetak.component.html',
  styleUrls: ['./pocetak.component.css']
})
export class PocetakComponent implements OnInit {

  zadatak = [
    {"ime":"Labos 1","lok":"z1","kat":"nbp labosi"},
    {"ime":"Labos 2","lok":"z2","kat":"nbp labosi"},
    {"ime":"Labos 3","lok":"z3","kat":"nbp labosi"},
    {"ime":"Dodatni 1","lok":"d1","kat":"nbp dodatno"},
    {"ime":"Labos 4","lok":"z4","kat":"nbp labosi"}];

  constructor() { }

  ngOnInit() {
  }


}
