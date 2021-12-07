import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filt'
})
export class FiltPipe implements PipeTransform {

  transform(lista: any[], genre: string): any[] {

    let izlaz = lista;


    if (lista) {
      izlaz.map(ser => {
        let zbroj : number = 0;
        ser.seasons.forEach((s: { rating: number; }) => zbroj+=s.rating);
        ser.avg = zbroj/ser.seasons.length;
        ser.top =0;
        ser.seasons.forEach((s: { rating: number; }) => {
          if (s.rating > ser.top) ser.top=s.rating;
        })
      })



      if (genre.length>1) {
        return izlaz.filter(ser => ser.genres.includes(genre));
      }
      else {
        return izlaz;
      }
    }
    else {
      return lista;
    }
  }

}
