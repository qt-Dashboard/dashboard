import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import "leaflet-control-geocoder";
import 'lrm-graphhopper';

Leaflet.Icon.Default.imagePath = 'assets/';


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
          createMarker: function(i, wp) {
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


      
      function goTo(LatTo: any, LongTo: any, typeCarte: any, latFrom: any, longFrom: any) {
       
       
        var been_routed = false;
  
        if (typeof latFrom === 'undefined') {
          latFrom = 45.02275321906884;
        }
        if (typeof longFrom === 'undefined') {
          longFrom = 1.3517542134257543;
        }
  
        // $(".leaflet-top.leaflet-right").html('');
        /*$(".-pane.leaflet-overlay-pane svg g").html('');*/
  
  
  
        if ((LatTo !== '') && (latFrom != '') && (longFrom != '')) {
          // alert(longFrom);
  
          if (typeCarte == 1) {
            var typeCart = 'car';
            var color = '#063970';
          }
          if (typeCarte == 2) {
            var typeCart = 'foot';
            var color = '#873e23';
          }
          if (typeCarte == 3) {
            var typeCart = 'bike';
            var color = '#563261';
          }
  
  

          var routing = L.Routing.control({
            waypoints: [
              L.latLng(latFrom, longFrom),
              L.latLng(LatTo, LongTo)
            ],
            // lineOptions: {
            //   styles: [{ color: color, opacity: 1, weight: 5 }]
            // },
            geocoder: (L.Control as any).Geocoder.nominatim(),
            router: (L.Routing as any).graphHopper('8d38728c-beec-4c0f-9882-8d22d9b9b052', {
             
  
              // urlParameters: {
              //   vehicle: typeCart
              // }
  
            }),
            // locale: 'fr',
            // routeWhileDragging: false,
            // language: 'fr'
          });

            if (been_routed == false) {
            routing.spliceWaypoints(0, 1);
          }

          routing.addTo(mymap);
          been_routed = true;
  
        }
  
      }

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




  // -------------- A voir ---------------

  // map!: Leaflet.Map;
  // markers: Leaflet.Marker[] = [];
  // options = {
  //   layers: [
  //     Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //     })
  //   ],
  //   zoom: 16,


  // }

  // initMarkers() {
  //   const initialMarkers = [
  //     {
  //       position: { lat: 47.02275321906884, lng: 1.1517542134257543 },
  //       name: "point 3"
  //     },
  //     {
  //       position: { lat: 48.035669436745735, lng: 1.1517542134257543 },
  //       name: "point 2"
  //     },
  //     {
  //       position: { lat: 49.02275321906884, lng: 1.1517542134257543 },
  //       name: "lieu: Home",
  //       tel: "tel: 0207080808"
  //     },
  //   ];
  //   for (let index = 0; index < initialMarkers.length; index++) {
  //     const data = initialMarkers[index];
  //     const marker = this.generateMarker(data, index);
  //     marker.addTo(this.map).bindPopup(`<div>${data.name}</div>` + `<div>${data.tel}</div>`);
  //     this.map.panTo(data.position);
  //     this.markers.push(marker)
  //   }
  // }

  // generateMarker(data: any, index: number) {
  //   return Leaflet.marker(data.position, { draggable: data.draggable })
  //     .on('click', (event) => this.markerClicked(event, index))
  //     .on('dragend', (event) => this.markerDragEnd(event, index));

  // }

  // onMapReady($event: Leaflet.Map) {
  //   this.map = $event;
  //   this.initMarkers();
  // }

  // mapClicked($event: any) {
  //   console.log($event.latlng.lat, $event.latlng.lng);
  // }

  // markerClicked($event: any, index: number) {
  //   console.log($event.latlng.lat, $event.latlng.lng);
  // }

  // markerDragEnd($event: any, index: number) {
  //   console.log($event.target.getLatLng());
  // }

  // getAddress(lat: number, lng: number) {
  //   const geocoder = (Leaflet.Control as any).Geocoder.nominatim();
  //   return new Promise((resolve, reject) => {
  //     geocoder.reverse(
  //       { lat, lng },
  //       this.map.getZoom(),
  //       (results: any) => results.length ? resolve(results[0].name) : reject(null)
  //     );
  //   })
  // }


}

