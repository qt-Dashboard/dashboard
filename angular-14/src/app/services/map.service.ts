import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { ButtonsComponent } from '../material-component/buttons/buttons.component';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  baseUrl: string = 'http://localhost:3000/mapData';




  constructor(private http: HttpClient) {

  }

  makeMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {

      for (const c of res) {
        const lat = c.coordinates[0];
        const lon = c.coordinates[1];
        let marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(`<center>
        <p>
        <strong>${c.name}</strong>
        </p>
        </center>
        <p>${c.description}</p>
        `);
      }
    });
  }

}
