import { Component, AfterViewInit, OnInit, Renderer2, ElementRef } from '@angular/core';
import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { geocoder, Geocoder, geocoders } from 'leaflet-control-geocoder';
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

  map: any;
  position: any;
  artworkList: any;
  markers: any;
  category: any;
  popupOptions = {
    className: "test test2"
  };

  positionMarkers: any;
  name: any;
  debut: any;
  fin: any;
  currentPosition: any;
  route: any;

  constructor(private http: HttpClient, private renderer: Renderer2,
    private el: ElementRef) {

  }

  baseUrl: string = 'http://localhost:3000/mapData';
  categories: string = 'http://localhost:3000/categories'

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('localisation is not supported');

    }

    navigator.geolocation.getCurrentPosition((position) => {

      const coords = position.coords;
      this.position = [position.coords.latitude, position.coords.longitude];

      console.log(
        `lat: ${coords.latitude}, lon: ${coords.longitude}`
      );
      this.map = L.map('map').setView(<any>this.position, 7);

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
          id: 'map',

        }
      ).addTo(this.map);
      this.refresh()
      this.refreshMarkers()

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


      new Geocoder({ position: 'topleft' }).addTo(this.map);



      // let home = (document.getElementById("maison") as HTMLOptionElement).value;
      // let medical = (document.getElementById("medical") as HTMLOptionElement).value;

      // this.mapService.makeMarkers(mymap);


    });

    // this.watchPosition();

  }

  ngOnDestroy() {
    this.map.clearAllEventListeners;
    this.map.remove();
  };

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

  buildMarkers(markers: any) {
    for (let artwork of markers) {
      this.buildPopup(artwork);

      L.marker(this.position).bindPopup('<b>Vous etes ici!</b>').openPopup().addTo(this.map);

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

  refresh(): void {
    this.http.get(this.categories).subscribe(artworkList => {
      this.artworkList = artworkList;
      // console.log(this.artworkList);
    });

    this.http.get(this.baseUrl).subscribe(markers => {
      this.markers = markers
      this.buildMarkers(markers);
    });


  }

  changeZipcode() {
    // empty map of any markers
    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) this.map.removeLayer(layer);
    });
    if (this.category === "-All-") {
      // build all markers like before selection
      this.buildMarkers(this.markers);

    } else {

      // return object inside array which contains the specific zipcode
      const currentArtworklist = this.markers.filter(

        (list: any) => list.category == this.category
      );

      this.buildMarkers(currentArtworklist);
    }
  }

  refreshMarkers(): void {

    this.http.get(this.baseUrl).subscribe(positionMarkers => {
      this.positionMarkers = positionMarkers
      this.routing();

    });


  }
  routing() {

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
        L.latLng(this.position),
        L.latLng(49.02275321906884, 1.1517542134257543)
      ],

      geocoder: (L.Control as any).Geocoder.nominatim(),


    }).addTo(this.map);
  }

  changeRouting() {

    const boxes = document.querySelectorAll('.leaflet-routing-container');

    boxes.forEach(box => {
      box.remove();
    });

    const line = document.querySelectorAll('.leaflet-interactive');

    line.forEach(lin => {
      lin.remove();
    });

      this.map.eachLayer((routeMarkers: any) => {

        if (routeMarkers instanceof L.Point) this.map.removeLayer(routeMarkers);
      });

      this.map.eachLayer((layer: any) => {

        if (layer instanceof L.Marker) this.map.removeLayer(layer);
      });

      this.buildMarkers(this.markers);

    // this.map.eachLayer((route: any) => {

    //   if (route instanceof (L.Routing.Line)) this.map.removeLayer(route);
    // });


    if (this.name === "end") {

      return this.routing();

    } else {

      // return object inside array which contains the specific zipcode
      const currentPosition = this.positionMarkers.filter(

        // (debut: any) => debut.name == this.name,
        (fin: any) => fin.name == this.name
      );
      // console.log(currentPosition);
      // console.log(currentPosition[0].coordinates);
      this.currentPosition = currentPosition[0].coordinates

      this.route = L.Routing.control({
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
          L.latLng(this.position),
          L.latLng(this.currentPosition)
        ],
        geocoder: (L.Control as any).Geocoder.nominatim(),


      }).addTo(this.map);

    }

  }


}

