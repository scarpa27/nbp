import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sorter'
})
export class SorterPipe implements PipeTransform {

    transform(ulaz: any[], stupac: string, obrnuto: boolean): any[] {

        let izlaz = ulaz.sort((a, b) => {
            if (typeof a[stupac] == "number")  return a[stupac] - b[stupac];
            return a[stupac].localeCompare(b[stupac]);
        })

        if (obrnuto) return izlaz.reverse();
        else return izlaz;
    }

}
