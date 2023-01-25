import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Geocoder, geocoders } from 'leaflet-control-geocoder';
import "lrm-graphhopper";
import { HttpClient } from '@angular/common/http';

Leaflet.Icon.Default.imagePath = 'assets/';

// Pour voir l'api avec la map mettre dans le terminal: json-server --watch data.json

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000/mapData';

  selectedOption!: string;
  printedOption!: string;

  options = [
    { name: "Maison", value: "maison" },
    { name: "Medical", value: "pharmacie" }
  ]

  print() {
    this.printedOption = this.selectedOption;
    if (this.printedOption === "Maison") {
      // let mymap = (document.getElementById('map') as HTMLDivElement);
      
      // this.mapService.makeMarkers(<any>mymap);
    }

  }


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
        addWaypoints: true,
        routeWhileDragging: false,
        showAlternatives: true,
        fitSelectedRoutes: false,
        show: false,

        waypoints: [
          L.latLng(coords.latitude, coords.longitude),
          L.latLng(49.02275321906884, 1.1517542134257543)
        ],
        // plan: L.Routing.plan([
        //   L.latLng(coords.latitude, coords.longitude),
        //   L.latLng(49.02275321906884, 1.1517542134257543)
        // ], 

        // {
        //   createMarker: function (i, wp) {
        //     return L.marker(wp.latLng, {
        //       draggable: false
        //     });
        //   }
        // }
        // ),
        geocoder: (L.Control as any).Geocoder.nominatim()

      }).addTo(mymap);

      new Geocoder({ position: 'topleft' }).addTo(mymap);

      let marker = L.marker(<any>latLong).addTo(mymap);

      marker.bindPopup('<b>Vous etes ici!</b>').openPopup();


      // let home = (document.getElementById("maison") as HTMLOptionElement).value;
      // let medical = (document.getElementById("medical") as HTMLOptionElement).value;

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


  constructor(private mapService: MapService, private http: HttpClient) {


  }


}

