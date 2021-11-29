import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare function zbrajanje(a:number,b:number): number;
declare function oduzimanje(a:number,b:number): number;
declare function racunaj(a:number,b:number,c:string): number;


@Component({
  selector: 'app-country-detail',
  templateUrl: './z1_1.component.html',
  styleUrls: ['./z1_1.component.css']
})
export class Z1_1Component implements OnInit {

  constructor(private route:ActivatedRoute) {}

  a: number=0;
  b: number=0;
  c: string="zbrajanje";


  ngOnInit() {
    this.a = + prompt("Unesi broj a:")!;
    this.b = + prompt("Unesi broj b: ")!;
    let f = prompt("zbrajanje(default)/oduzimanje ")!;
    this.c = f.length>0? f : this.c;

    console.log(racunaj(this.a, this.b, this.c));
  }

  // racunaj(a:number,b:number,c:string):number {
  //   return eval(c+"("+a+","+b+")");
  // }
}
