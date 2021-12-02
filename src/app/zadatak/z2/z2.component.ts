import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-country-detail',
  templateUrl: './z2.component.html',
  styleUrls: ['./z2.component.css']
})
export class Z2Component implements OnInit, AfterViewInit {

  filmovi: any[] = [];
  godine: any[] = [];
  index=250;
  div: any;


  constructor(private route:ActivatedRoute) {
    let a = document.getElementById('filmovi');
    if (a!= null) this.div = a;
    let skripta : HTMLScriptElement = document.createElement("script");
    skripta.src = "src/assets/js/skripta2.js";
    document.body.appendChild(skripta);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    document.forms[1].style.display="none";
    let a = document.getElementById("osvjezi");
    if (a != null) a.style.display="none";
    a = document.getElementById("novi_film");
    if (a != null) a.style.display="none";
  }


  getData() {
    document.getElementById("ucitaj")!.style.display="none";
    document.getElementById("osvjezi")!.style.display="inline-block";
    document.getElementById("novi_film")!.style.display="inline-block";
    fetch('https://bridge.hr/ipw/imdb.json')
      .then(data => data.json())
      .then(data => {
        this.filmovi = data;
        this.postavi_godine(this.filmovi);
        this.render(this.filmovi);
      });
  }

  filter() {
    let filmovi2 = [];

    let a = document.getElementById("rev") as HTMLInputElement;
      if (a.checked) {
        filmovi2 = [...(this.filmovi)].reverse();
      }
      else {
        filmovi2 = [...(this.filmovi)];
      }


    let b = document.getElementById("limit") as HTMLInputElement;
    let limit :any;
    limit = b.value;
    limit = limit === "" ? this.filmovi.length : limit;
    if (limit === "") {
      limit = this.filmovi.length;
    }



    let god = (<HTMLSelectElement>document.getElementById("god")!).options[(<HTMLSelectElement>document.getElementById("god")!).selectedIndex].text;

    if (god !== "SVI") {
      filmovi2=filmovi2.filter(film => {
        if (film.year == god) {
          return film;
        }
      }).map(a => a);
    }


    this.render(filmovi2.slice(0,limit));
  }

  dodaj_film() {

    let dalje = true;


    Array.from(document.getElementsByClassName("dodaj")).forEach(e => {
      let x=(<HTMLInputElement>e).value;
      if (x.length<1) {
        e.classList.add("pocrveni");
        dalje=false;
      }
      else {
        e.classList.remove("pocrveni");
      }
    });

    if (dalje) {

      let film={
        index: 0,
        name: "",
        rating: "",
        year: "",
        poster: ""
      };
      film.index=++this.index;
      film.name = (<HTMLInputElement>(document.getElementById("d1")!)).value;
      film.rating = (<HTMLInputElement>(document.getElementById("d2")!)).value;
      film.year = (<HTMLInputElement>(document.getElementById("d3")!)).value;
      film.poster = (<HTMLInputElement>(document.getElementById("d4")!)).value;

      this.filmovi.push(film);
      document.getElementById("osvjezi")!.click();
      (<HTMLInputElement>document.getElementById("d1")!).value="";
      (<HTMLInputElement>document.getElementById("d2")!).value="";
      (<HTMLInputElement>document.getElementById("d3")!).value="";
      (<HTMLInputElement>document.getElementById("d4")!).value="";
      document.forms[1].style.display="none";
    }
  }

  postavi_godine(filmovi: any[]) {
    this.godine = Array.from(new Set(filmovi.map(item => item.year))).sort();
    this.godine.forEach(godina => {
      let izbor = document.createElement("option");
      izbor.textContent=godina;
      izbor.value=godina;
      let a = document.getElementById("god");
      if (a!=null) a.appendChild(izbor);
    })
  }

  render(filmovi: any[]) {
    let items = filmovi;
    let html = ``;

    html += `
        <table class='table table-striped'>
            <tr>
                <th>#</th>
                <th>Naslov</th>
                <th>Godina</th>
                <th>Ocjena</th>
                <th>Poster</th>
                <th></th>
            </tr>
        `;

    html += items.map(item => `
            <tr>
                <td>${item.index}</td>
                <td>${item.name}</td>
                <td>${item.year}</td>
                <td>${item.rating}</td>
                <td><img height=101 width=68 src="${item.poster}"></td>
                <td><button class="brisi btn btn-danger">Obriši</button></td>
            </tr>
        `).join('');

    html += `
            </table>
        `;

    document.getElementById("filmovi")!.innerHTML = html;

    this.ukloni();
  }

  ukloni() {
    let brisi = Array.from(document.getElementsByClassName("brisi"));
    brisi.forEach(b => {
      b.addEventListener('click', e => {
        e.preventDefault();
        let a:any;
        this.filmovi = this.filmovi.filter(film => {
          return film.index != b.parentElement!.parentElement!.firstElementChild!.innerHTML
        });

        a =document.getElementById("osvjezi");
        if (a!=null) a.click();
      })
    });
  }




}
