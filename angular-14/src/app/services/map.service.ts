import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import 'leaflet-control-geocoder';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  static makeMarkers() {
    throw new Error('Method not implemented.');
  }


  baseUrl: string = 'http://localhost:3000/mapData';




  constructor(private http: HttpClient) {
    
  }



  makeMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {

      for (const c of res) {
        const lat = c.coordinates[0];
        const lon = c.coordinates[1];         
                
        var routeOn = false;
        var greenIcon = L.icon({ //add this new icon

          iconUrl: c.iconUrl,
          shadowUrl: './assets/images/map/marker-shadow.png',

          iconAnchor:   [12, 40], // point of the icon which will correspond to marker's location
          shadowAnchor: [12, 40],  // the same for the shadow
          popupAnchor:  [0, -76] // point from which the popup should open relative to the iconAnchor

      });

      
      
        let marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(`<center>
        <p>
        <strong>${c.name}</strong>
        </p>
        </center>
        
        <script>
          function test(){
            alert("ok");
          }
        </script>

        <button onclick="goTo(${c.coordinates[0], c.coordinates[1], 1, '', ''})" >ICI</button>
        <p>${c.description}</p>
        `);
        marker.setIcon(greenIcon);
        // marker.on('click', function(){

        // alert("!");

        
    //     marker.on('click', function () {
    //       if (routeOn === false) {
            
          
    //       L.Routing.control({
    //       router: L.Routing.osrmv1({
    //         serviceUrl: `https://router.project-osrm.org/route/v1/`
    //       }),
    //       routeWhileDragging: true,
    //       showAlternatives: true,
    //       fitSelectedRoutes: false,
    //       show: false,
    //       addWaypoints: false,
        
    //       waypoints: [
    //         L.latLng(c.coordinates[0], c.coordinates[1], 1),
    //         L.latLng(10, 40)
    //       ],
          
          
    //     }).addTo(map); routeOn = true;
    //     }else{routeOn = true;
    //       L.Routing.control({
    //         router: L.Routing.osrmv1({
    //           serviceUrl: `http://router.project-osrm.org/route/v1/`
    //         }),
    //         routeWhileDragging: true,
    //         showAlternatives: true,
    //         fitSelectedRoutes: false,
    //         show: false,
    //         addWaypoints: false,
          
    //         waypoints: [
    //           L.latLng(c.coordinates[0], c.coordinates[1], 1),
    //           L.latLng(10, 40)
    //         ], }).remove();
    //        routeOn = false;}  })
    // // });

    
      }
    }); 
  
  }

//   const button = document.getElementById('test1');

//   button?.addEventListener('click', function handleClick(event) {
//   console.log('button clicked');
//   console.log(event);
//   console.log(event.target);
// });




}
