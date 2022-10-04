import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/services/marker.service';

const iconRetinaUrl = 'https://altameos.com/mapV2/AdminD/uploads/map-icon/99cd4e87ba844e19fbd431554fc651aa.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 35],
  iconAnchor: [10, 40],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [40, 40]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [49.02275321906884, 1.1517542134257543],
      zoom: 12,

    });

    // const marker = L.marker([49.02275321906884, 1.1517542134257543]);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      
    });


    
    // marker.addTo(this.map);
    tiles.addTo(this.map);

  }

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.map.initMap(this.map);
    this.markerService.getModel();
  }

}