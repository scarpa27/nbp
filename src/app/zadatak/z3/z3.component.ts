import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country-detail',
  templateUrl: './z3.component.html',
  styleUrls: ['./z3.component.css']
})
export class Z3Component implements OnInit {
  pokazi = false;
  gumb = "Novi komentar";

  komentari = [
    {autor:'Marko',komentar:'Neki komentar', vrijeme:new Date(2017,4,6,16,0)},
    {autor:'Ivan',komentar:'Još neki komentar', vrijeme:new Date(2018,11,7,12,45)},
    {autor:'Petra',komentar:'Neki komentar 2', vrijeme:new Date(2019,6,21,12,28)},
    {autor:'Anja',komentar:'Neki komentar 3', vrijeme:new Date(2020,11,11,11,11)},
    {autor:'Tomislav',komentar:'Neki komentar 4', vrijeme:new Date(2021,10,19,11,10)},
    {autor:'Jana',komentar:'Neki komentar 5', vrijeme:new Date(2021,11,1,23,31)}
  ];

  izmjena: boolean[]=new Array(this.komentari.length).fill(false);
  kom:string[]=new Array(this.komentari.length).fill('');

  new = {
    autor:'',
    komentar:'',
    vrijeme:new Date()
  };

  add(){
    if (this.new.autor!='') {
      this.komentari.push(this.new);
      this.new={autor:'',vrijeme:new Date(), komentar:''};
      this.pokazi=false;
    }}

  obrisiKom(index:number) {
    this.komentari.splice(index,1);
  }

  izmjeniKom(i:number) {
    this.kom[i]=this.komentari[i].komentar;
    this.izmjena[i]=true;
  }

  spremi(i:number) {
    this.komentari[i].komentar=this.kom[i];
    this.izmjena[i]=false;
  }

  constructor() {}
  ngOnInit() {}
}
