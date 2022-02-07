export class Plovilo  {
  'id':number;
  'naziv':string;
  'vlasnik':string;
  'drzava':string;

  constructor(_id:number, _naziv:string, _vlasnik:string, _drzava:string) {
    this.id=_id;
    this.naziv=_naziv;
    this.vlasnik=_vlasnik;
    this.drzava=_drzava;
  }
}
