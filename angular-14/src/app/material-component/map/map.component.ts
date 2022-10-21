import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import "leaflet-control-geocoder";
import "lrm-graphhopper";

Leaflet.Icon.Default.imagePath = 'assets/';

// Pour voir l'api avec la map mettre dans le terminal: json-server --watch data.json

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000/mapData';

  ngOnInit() {

    if (!navigator.geolocation) {
      console.log('localisation is not supported');

    }

    navigator.geolocation.getCurrentPosition((position) => {

      const coords = position.coords;
      const latLong = [position.coords.latitude, position.coords.longitude];

      console.log(
        `lat: ${coords.latitude}, lon: ${coords.longitude}`
      );
      let mymap = L.map('map').setView(<any>latLong, 7);

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
          id: 'map',

        }
      ).addTo(mymap);

      L.Routing.control({
        router: L.Routing.osrmv1({
          serviceUrl: `http://router.project-osrm.org/route/v1/`,
          language: 'fr'
        }),
        routeWhileDragging: true,
        showAlternatives: true,
        fitSelectedRoutes: false,
        show: false,
        addWaypoints: false,
        waypoints: [
          L.latLng(coords.latitude, coords.longitude),
          L.latLng(49.02275321906884, 1.1517542134257543)
        ],
        plan: L.Routing.plan([
          L.latLng(coords.latitude, coords.longitude),
          L.latLng(49.02275321906884, 1.1517542134257543)
        ], {
          createMarker: function (i, wp) {
            return L.marker(wp.latLng, {
              draggable: false
            });
          }
        }),
        // geocoder: (L.Control as any).Geocoder.nominatim(),

      }).addTo(mymap);


      let marker = L.marker(<any>latLong).addTo(mymap);

      marker.bindPopup('<b>Vous etes ici!</b>').openPopup();

      this.mapService.makeMarkers(mymap);

    });

    this.watchPosition();

  }

  watchPosition() {

    const desLat = 0;
    const desLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if (position.coords.latitude === desLat) {
        navigator.geolocation.clearWatch(id);
      }
    }, (err) => {
      console.log(err);

    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })

  }


  constructor(private mapService: MapService) {

  }


}

