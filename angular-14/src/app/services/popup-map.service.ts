import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupMapService {

  constructor() { }

  makePopup(data: any) { 
    return `` +
    `<div>ville: ${ data.ville }</div>` +
    `<div>adresse: ${ data.adresse }</div>` +
    `<div>codepostal: ${ data.codepostal }</div>`
  }
  
  
}
