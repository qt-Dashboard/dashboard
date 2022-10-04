import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {


  constructor(private http: HttpClient) { }

  getModel() {
    return this.http.get('../models/map.model');
  }


  // makeMarkers(map: L.Map): void {
  //   this.http.get().subscribe((res: any) => {
  //     for (const c of res.features) {
  //       const lon = c.geometry.coordinates[0];
  //       const lat = c.geometry.coordinates[1];
  //       const marker = L.marker([lat, lon]);

  //       marker.addTo(map);
  //     }
  //   });
  // }
}
