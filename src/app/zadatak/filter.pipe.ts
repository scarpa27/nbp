import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(lista: any[], sem: any): any[] {

        let izlaz = lista;

        if (lista) {
            izlaz.forEach(st => st.semestar = Math.floor((st.ects / 30) + 1));


            if (sem) {
                return izlaz.filter(st => st.semestar == sem);
            } else {
                return izlaz;
            }
        } else {
            return lista;
        }
    }

}
