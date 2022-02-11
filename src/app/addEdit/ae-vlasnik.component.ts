import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ae-vlasnik',
  templateUrl: './ae-vlasnik.component.html',
  styleUrls: ['./ae-vlasnik.component.css']
})
export class AeVlasnikComponent implements OnInit {
    _id: number = 0;
    _editing: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
