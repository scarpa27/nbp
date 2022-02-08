export class Plovilo  {
  'id':number;
  'ime':string;
  'vlasnik':string;
  'drzava':string;

  constructor(_id:number, _ime:string, _vlasnik:string, _drzava:string) {
    this.id=_id;
    this.ime=_ime;
    this.vlasnik=_vlasnik;
    this.drzava=_drzava;
  }
}
