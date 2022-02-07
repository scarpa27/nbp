import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetak',
  templateUrl: './pocetak.component.html',
  styleUrls: ['./pocetak.component.css']
})
export class PocetakComponent implements OnInit {

  zadatak = [
    {"ime":"Labos 4","lok":"z4","kat":"nbp labosi"},
    {"ime":"Plovila","lok":"plovilo","kat":"nbp dodatni"}];



  constructor() { }

  ngOnInit() {
  }
}
