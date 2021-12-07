import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-serija',
  templateUrl: './serija.component.html',
  styleUrls: ['./serija.component.css']
})
export class SerijaComponent implements OnInit {

  serija:any;
  sezone:any;


  serije = [
    {id:1, name:"The Wire", genres:['Crime', 'Drama', 'Thriller'], seasons:[
        {number:1, rating:8.4},
        {number:2, rating:8.5},
        {number:3, rating:8.8},
        {number:4, rating:8.8},
        {number:5, rating:8.8}
      ]},
    {id:2, name:"The Leftovers", genres:['Fantasy', 'Drama', 'Mystery'],
      seasons:[
        {number:1, rating:8.5},
        {number:2, rating:9.1},
        {number:3, rating:9.2}
      ]},
    {id:3, name:"The Expanse", genres:['Sci-fi', 'Drama', 'Mystery'],
      seasons:[
        {number:1, rating:8.2},
        {number:2, rating:8.6},
        {number:3, rating:9.0},
        {number:4, rating:8.8}
      ]},
    {id:4, name:"The Americans", genres:['Crime', 'Drama', 'Mystery'],
      seasons:[
        {number:1, rating:8.3},
        {number:2, rating:8.3},
        {number:3, rating:8.5},
        {number:4, rating:8.5},
        {number:5, rating:8.2},
        {number:6, rating:9.0}
      ]},
    {id:5, name:"The Office", genres:['Comedy'], seasons:[
        {number:1, rating:8.0},
        {number:2, rating:8.4},
        {number:3, rating:8.6},
        {number:4, rating:8.6},
        {number:5, rating:8.5},
        {number:6, rating:8.2},
        {number:7, rating:8.3},
        {number:8, rating:7.6},
        {number:9, rating:7.9}
      ]},
  ];


  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.serija  = this.serije.find(s => s.id==this.route.snapshot.params['id']);
    this.sezone = this.serija.seasons;
  }

}
