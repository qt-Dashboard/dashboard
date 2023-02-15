import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import * as L from 'leaflet';
// import 'leaflet-control-geocoder';
import { PointOfInterest } from '../models/poi.model';


@Injectable({
  providedIn: 'root'
})

export class PoiService {
  // static makeMarkers() {
  //   throw new Error('Method not implemented.');

  // }

  baseUrl: string = 'http://localhost:3000/mapData';

  constructor(private http: HttpClient) {

  }

  getPointOfInterest(): Observable<PointOfInterest[]> {
    const pointOfInterest = this.http.get<PointOfInterest[]>(`${this.baseUrl}`);
    return pointOfInterest;
  }

  // makeMarkers(map: L.Map): void {
  //   this.http.get(this.baseUrl).subscribe((res: any) => {

  //     for (const c of res) {
        
  //       const lat = c.coordinates[0];
  //       const lon = c.coordinates[1];

  //       let routeOn = false;

  //       let greenIcon = L.icon({ //add this new icon

  //         iconUrl: c.iconUrl,
  //         shadowUrl: './assets/images/map/marker-shadow.png',

  //         iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
  //         shadowAnchor: [12, 40],  // the same for the shadow
  //         popupAnchor: [0, -34] // point from which the popup should open relative to the iconAnchor

  //       });


  //       let marker = L.marker([lat, lon]).addTo(map);
  //       marker.bindPopup(`
  //       <div align='center'>

  //       <a href="/">home</a>

  //       <form>
  //       <input type="button" value="Démarrer la machine">
  //       </form>
  //       <p>La machine est arrêtée.</p>
       
  //       </div>
  //     `).addTo(map)



        // .bindPopup(
        //   `<body><center>
        // <p><strong>${c.name}</strong></p>
        // <button $(click)="console.log("ok")" >ICI</button>
        // </center>
        // </body>`
        // );


        // marker.bindPopup(`<body><center>
        // <p>
        // <strong>${c.name}</strong>
        // </p>
        // </center>
        // <button onclick="goTo(${c.coordinates[0], c.coordinates[1], 1, '', ''})" >ICI</button>
        // <p>${c.description}</p>
        //         <script>
        //   function test(){
        //     alert("ok");
        //   }
        // </script>
        // </body>`);

        // marker.setIcon(greenIcon);


        // function market() {


        //   L.Routing.control({

        //     router: L.Routing.osrmv1({
        //       serviceUrl: `http://router.project-osrm.org/route/v1/`
        //     }),
        //     routeWhileDragging: true,
        //     showAlternatives: true,
        //     fitSelectedRoutes: false,
        //     show: false,
        //     addWaypoints: false,
        //     waypoints: [
        //       L.latLng(lat, lon),
        //       L.latLng(5, 10)
        //     ],



        //   }).addTo(map);
        // }
  //     }
  //   })


  // }

  //   const button = document.getElementById('test1');

  //   button?.addEventListener('click', function handleClick(event) {
  //   console.log('button clicked');
  //   console.log(event);
  //   console.log(event.target);
  // });


}
