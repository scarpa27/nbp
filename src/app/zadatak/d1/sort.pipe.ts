import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(ulaz:any[], stupac:string, obrnuto:boolean): any[] {
    let izlaz = ulaz.sort((a, b) => {
      if (stupac==="name") return a[stupac].localeCompare(b[stupac]);
      return a[stupac] - b[stupac];
    })

    if (obrnuto) return izlaz.reverse();
    else return izlaz;
  }

}
