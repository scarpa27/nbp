import {Pipe, PipeTransform} from '@angular/core';
import {Plovilo} from "../klase/plovilo.model";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(lista: Plovilo[], f: string[]): any[] {
        return lista.filter(a => {
            return (
                (f[0].length == 0 || a.id.toString().includes(f[0]))
                && (f[1].length == 0 || a.naziv.toLowerCase().toString().includes(f[1].toLowerCase()))
                && (f[2].length == 0 || a.vlasnik.toString().toLowerCase().includes(f[2].toLowerCase()))
                && (f[3].length == 0 || a.drzava.toString().toLowerCase().includes(f[3].toLowerCase()))
            )
        })
    }
}
