import { Component, OnInit } from '@angular/core';
import { PointOfInterest } from "src/app/models/poi.model";
import { PoiService } from "src/app/services/poi.service";
import { Sort } from "@angular/material/sort";
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css']
})
export class AnnuaireComponent implements OnInit {

  map: any;
  coordinates: any;
  name: any;
  positionMarkers: any;
  currentPosition: any;
  popup: boolean = false;

  pointOfInterest: PointOfInterest[] = [];
  displayedColumns: string[] = ['id', 'name', 'ville', 'telephone', 'coordinate'];

  constructor(private poiService: PoiService, private http: HttpClient) {

  }

  baseUrl: string = 'http://localhost:3000/mapData';

  ngOnInit(): void {

    this.getPointOfInterest()

    this.map = L.map('map').setView([47, 4], 5);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
        id: 'map',

      }
    ).addTo(this.map);
    this.refresh()
  }

  buildMarkers(pointOfInterest: any) {
    for (let artwork of pointOfInterest) {
      this.buildPopup(artwork);

    }

  }

  buildPopup(object: any) {

    const popupInfo = `
        ${object.name} <br/>
        ${object.firstname}
        ${object.lastname} <br/>
        ${object.streetname} ${object.streetnumber}
        , ${object.category}
      `;
    if (this.popup != false) {
      this.map.setView([object.coordinates[0], object.coordinates[1]], 8);
      L.marker([object.coordinates[0], object.coordinates[1]]).setIcon(
        L.icon({ //add this new icon

          iconUrl: object.iconUrl,
          shadowUrl: './assets/images/map/marker-shadow.png',

          iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
          shadowAnchor: [12, 40],  // the same for the shadow
          popupAnchor: [0, -34] // point from which the popup should open relative to the iconAnchor

        })
      )
        .addTo(this.map)
        .bindPopup(popupInfo)
        .openPopup();
        
    } else {
      this.map.setView([47, 4], 5);
      L.marker([object.coordinates[0], object.coordinates[1]]).setIcon(
        L.icon({ //add this new icon

          iconUrl: object.iconUrl,
          shadowUrl: './assets/images/map/marker-shadow.png',

          iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
          shadowAnchor: [12, 40],  // the same for the shadow
          popupAnchor: [0, -34] // point from which the popup should open relative to the iconAnchor

        })
      )
        .addTo(this.map)
        .bindPopup(popupInfo);
    }

  }

  refresh() {

    this.http.get(this.baseUrl).subscribe(pointOfInterest => {
      this.positionMarkers = pointOfInterest
      this.buildMarkers(pointOfInterest)
    });

  }

  changeMarkers() {

    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) this.map.removeLayer(layer);
    })

    if (this.coordinates === "All") {
      this.popup = false;
      // build all markers like before selection
      this.buildMarkers(this.positionMarkers);

    } else {
      this.popup = true;
      this.currentPosition = this.positionMarkers.filter(

        // (debut: any) => debut.name == this.name,
        (pointOfInterest: any) => pointOfInterest.coordinates == this.coordinates
      );

      this.buildMarkers(this.currentPosition)
    }


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