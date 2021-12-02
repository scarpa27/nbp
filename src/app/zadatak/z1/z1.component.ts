import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country-detail',
  templateUrl: './z1.component.html',
  styleUrls: ['./z1.component.css']
})
export class Z1Component implements OnInit {

  str1 :String = "function zbrajanje (a,b) {\n" +
    "  return Number(a)+Number(b);\n" +
    "}\n" +
    "\n" +
    "function oduzimanje (a,b) {\n" +
    "  return Number(a)-Number(b);\n" +
    "}\n" +
    "\n" +
    "let racunaj = function (a,b,x) {\n" +
    "  let modulo = a%b;\n" +
    "  let c=eval(x)(a,b);\n" +
    "  console.log(c);\n" +
    "}\n" +
    "\n" +
    "let a = prompt(\"Unesi broj a: \");\n" +
    "let b = prompt(\"Unesi broj b: \");\n" +
    "let x = prompt(\"zbrajanje/oduzimanje: \");\n" +
    "racunaj(a,b,x);";

  str2 :String ="let a = prompt(\"prvi broj \",\"\");\n" +
    "let b = prompt(\"drugi broj \",\"\");\n" +
    "\n" +
    "function generator(x) {\n" +
    "    console.log(a+x+b);\n" +
    "    return  (a,b) =>\n" +
    "        eval(a+x+b);\n" +
    "}\n" +
    "\n" +
    "let zbrajanje = generator('+');\n" +
    "let oduzimanje = generator('-');\n" +
    "let mnozenje = generator('*');\n" +
    "let dijeljenje = generator('/');\n" +
    "let ostatak = generator('%');\n" +
    "\n" +
    "console.log(zbrajanje(Number(a),Number(b)));\n" +
    "console.log(oduzimanje(a,b));\n" +
    "console.log(mnozenje(a,b));\n" +
    "console.log(dijeljenje(a,b));\n" +
    "console.log(ostatak(a,b));";

  str3 : String = "let l1=Array(10).fill().map(() => Math.round(Math.random() * 9 + 1));\n" +
    "console.log(l1);\n" +
    "\n" +
    "l1 = l1.filter((element, index) => {\n" +
    "  return l1.indexOf(element) === index;});\n" +
    "console.log(l1);\n" +
    "\n" +
    "let l2 = l1.filter(function(e,i) {\n" +
    "  if (e>i) return true;})\n" +
    "console.log(l2);\n" +
    "\n" +
    "l2 = l2.map(x => x*2);\n" +
    "console.log(l2);\n" +
    "\n" +
    "l2.sort((a,b)=> {return a-b});\n" +
    "console.log(l2);";

  str4 : String = "class Student {\n" +
    "    constructor (i,j,p,s) {\n" +
    "        this.ime=i;\n" +
    "        this.jmbag=j;\n" +
    "        this.prosjek=p;\n" +
    "        this.semestar=s;\n" +
    "    }\n" +
    "    pokazi() {\n" +
    "        console.log(this.ime + \" (\" + this.jmbag + \") - \" + this.prosjek + \" (\" + this.semestar + \")\");\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "class Godina {\n" +
    "    constructor(g,n,p) {\n" +
    "        this.godina = g;\n" +
    "        this.broj = n;\n" +
    "        this.prosjek = p;\n" +
    "    }\n" +
    "    pokazi() {\n" +
    "        console.log(this.godina + \". godina ima \" + this.broj + \" studenata s kolektivnim prosjekom \" + this.prosjek.toFixed(3));\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "let lista = new Array(5);\n" +
    "\n" +
    "/*for (let i = 0; i<5; i++) {\n" +
    "    lista[i] = new Student(prompt(\"Ime \",\"\"),prompt(\"JMBAG \",\"\"),prompt(\"Prosjek \",\"\"),prompt(\"Semestar \",\"\"))\n" +
    "}*/\n" +
    "\n" +
    "lista.push(new Student(\"Toni\",\"0082058337\",4.9,5));\n" +
    "lista.push(new Student(\"Ante\",\"5231564789\",3.4,4));\n" +
    "lista.push(new Student(\"Mate\",\"4783015490\",2.8,2));\n" +
    "lista.push(new Student(\"Pero\",\"3030216970\",3.5,4));\n" +
    "lista.push(new Student(\"Luka\",\"9984315061\",4.1,5));\n" +
    "\n" +
    "lista.forEach(e => e.pokazi());\n" +
    "console.log(\"---\");\n" +
    "\n" +
    "lista.sort(function (a, b) {\n" +
    "    let c = a.semestar - b.semestar;\n" +
    "    if (c===0) {\n" +
    "        c = b.prosjek - a.prosjek\n" +
    "    }\n" +
    "    return c;\n" +
    "})\n" +
    "\n" +
    "lista.forEach(e => e.pokazi());\n" +
    "console.log(\"---\");\n" +
    "\n" +
    "let y = new Array(5);//.fill([0,0]);\n" +
    "for (let i=0; i<5; i++) y[i]=[0,0];\n" +
    "\n" +
    "lista.forEach(s => {\n" +
    "    y[Math.floor((s.semestar+1)/2)-1][0]++;\n" +
    "    y[Math.floor((s.semestar+1)/2)-1][1]=(y[Math.floor((s.semestar+1)/2)-1][1]*(y[Math.floor((s.semestar+1)/2)-1][0]-1)+s.prosjek)/y[Math.floor((s.semestar+1)/2)-1][0];\n" +
    "});\n" +
    "\n" +
    "let god = new Array();\n" +
    "\n" +
    "for (let i=0; i<5; i++) {\n" +
    "    if (y[i][0]>0) god.push(new Godina(i+1,y[i][0],y[i][1]));\n" +
    "}\n" +
    "\n" +
    "god.sort((a,b) => (b.prosjek-a.prosjek));\n" +
    "god.forEach(e => e.pokazi());\n" +
    "console.log(\"---\");\n" +
    "\n" +
    "\n" +
    "lista=lista.filter(s => (s.semestar==5 || s.semestar==6));\n" +
    "console.log(lista.reduce((sum,x) => (sum+x.prosjek),0)/lista.length);";

  strs : String[] = [this.str1,this.str2,this.str3,this.str4];


  constructor(private route:ActivatedRoute) {}
  ngOnInit() {}

}
