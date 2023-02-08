import { Component, OnInit } from '@angular/core';
import { PointOfInterest } from "src/app/models/poi.model";
import { PoiService } from "src/app/services/poi.service";
import { Sort } from "@angular/material/sort";
import * as L from 'leaflet';

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css']
})
export class AnnuaireComponent implements OnInit {
  
  map: any;
  pointOfInterest: PointOfInterest[] = [];
  displayedColumns: string[] = ['id', 'name', 'ville', 'telephone'];

  constructor(private poiService: PoiService) {

  }

  ngOnInit(): void {
    this.getPointOfInterest()

    this.map = L.map('map').setView([1,0], 7);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
        id: 'map',

      }
    ).addTo(this.map);
  }

  sortData(sort: Sort) {
    const data = this.pointOfInterest.slice();
    if (!sort.active || sort.direction === '') {
      this.pointOfInterest = data;
      return;
    }

    this.pointOfInterest = data.sort((a, b): any => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
          case 'name':
            return compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
        case 'ville':
          return compare(a.ville.toLowerCase(), b.ville.toLowerCase(), isAsc);
        case 'telephone':
          return compare(a.telephone.toLowerCase(), b.telephone.toLowerCase(), isAsc);

        // case 'email':
        //   return compare(a.email.toLowerCase(), b.email.toLowerCase(), isAsc);
        // default:
        //   return 0;
      }
    });
  }

  private getPointOfInterest() {
    this.poiService.getPointOfInterest().subscribe((pointOfInterest) => {
      this.pointOfInterest = pointOfInterest;
    });
  }

}

function compare(a: any | string, b: any | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}