import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Icon, icon, Marker } from "leaflet";
import "leaflet-routing-machine";
import * as L from 'leaflet';
import { Geocoder, geocoders } from 'leaflet-control-geocoder';
import { MapService } from "src/app/services/map.service";
import { Category } from "src/app/models/category.model";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  markers: any;

  constructor(private mapService: MapService) { }

  title = "";
  map!: L.Map;

  // Override default Icons
  private defaultIcon: Icon = icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  });

  ngOnInit() {
    Marker.prototype.options.icon = this.defaultIcon;
    
    var health: Icon = icon({
      iconUrl: "./assets/images/icons/hospital.png",
      iconSize: [30, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    });

    var bakery: Icon = icon({
      iconUrl: "./assets/images/icons/bread.png",
      iconSize: [30, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    });
  
    var cliniquePasteur = L.marker([49.0285241, 1.1608214], {icon: health}).bindPopup('La clinique Pasteur'),
        centreHospitalierSpecialise = L.marker([49.022766, 1.126632], {icon: health}).bindPopup('Le centre hospitalier spécialisé'),
        hopitalEvreux = L.marker([49.032370, 1.114956], {icon: health}).bindPopup('Centre hospitalier Seine-Eure'),
        // {{map.id}} = L.marker( {{map.coordonates}} ), {icon: {{map.categoryIcon || category.icon}} }).bindPopup( {{map.name}} )

        altameos  = L.marker([49.02329321906884, 1.1537442134257543]).bindPopup('Altameos Multimedia'),

        boulangerieDuBeffroi = L.marker([49.027286, 1.1494733], {icon: bakery}).bindPopup('La boulangerie du Beffroi'),
        boulangerieVictorHugo = L.marker([49.0225816, 1.1508074], {icon: bakery}).bindPopup('La boulangerie Victor Hugo'),
        boulangeriePetrinDuBuisson = L.marker([49.01553432902655, 1.1612688607160622], {icon: bakery}).bindPopup('La boulangerie "Le pétrin du buisson"');

    fetch('http://localhost:3300/marker/')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      
        for (let i = 0; i < data.length; i++) {
          let icon = L.icon({
            iconUrl: `./assets/images/icons/${data[i].categoryId.icon}`,
            iconSize: [30, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40]
          });
          const categoryName = data[i].categoryId.name;
          const marker = L.marker([data[i].lon, data[i].lat]).setIcon(icon).bindPopup(data[i].name).addTo(this.map);
          let restaurants = L.layerGroup();
          if (categoryName === 'Restaurants') {
            restaurants = L.layerGroup([marker]);
            console.log(restaurants);
          } else if (categoryName === 'azerty') {
            const azerty = L.layerGroup([marker]);
            console.log(azerty);
          } else {
            console.log('no');
          } 

          console.log(restaurants);
          

          // switch (true) {
          //   case categoryName === 'Restaurants':
          //     const group = L.layerGroup([marker]);
          //     console.log(group);
          //     break;
          
          //   default:
          //     console.log('no');
              
          //     break;      
          // }

          // var lg = L.layerGroup().addTo(this.map)
          // layergroups[type] = lg;
          
          // if (data[type]){
          //     var markers = data;
          //     markers.forEach((marker: any)=>{  
          //       console.log(marker);
                
          //         L.marker([marker.lon,marker.lat]).bindPopup(marker.desc).addTo(lg);
          //     })
          // }
        }
      
    });
  
    
    this.mapService.makeLayers(this.map).subscribe((categories: any) => {
      // categories.forEach((category: Category) => {
      //   console.log(category);
      // });     
      // for (const category of categories) {    
      //   console.log(category);
      // }
    });

    this.mapService.makeMarkers(this.map).subscribe((markers: any) => {
      for (let i=0; i < markers.length; ++i) {
        let icon = L.icon({
          iconUrl: `./assets/images/icons/${markers[i].categoryId.icon}`,
          iconSize: [30, 41],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40]
        });
        L.marker([markers[i].lon, markers[i].lat]).setIcon(icon).bindPopup(`${markers[i].name}`).addTo(this.map);

      }      
      console.log(markers);
      });

    var hospitals = L.layerGroup([cliniquePasteur, centreHospitalierSpecialise, hopitalEvreux]),
        entreprises = L.layerGroup([altameos]),
        bakeries = L.layerGroup([boulangerieDuBeffroi, boulangeriePetrinDuBuisson, boulangerieVictorHugo]);

        // {{category.variable}} = L.layerGroup([map.id])

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    });

    this.map = L.map('map', {
        center: [49.025, 1.135],
        zoom: 14,
        layers: [osm, hospitals, bakeries, entreprises]
    });

    var baseMaps = {
      "OpenStreetMap": osm,
    };
  
    var overlayMaps = {
        "Centres hospitaliers": hospitals,
        "Boulangeries": bakeries,
        "Altameos": entreprises,

        // {{ category.name}}: {{category.variable}}
    };

    L.control.layers(baseMaps, overlayMaps, {position: 'bottomleft'}).addTo(this.map);

    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `http://router.project-osrm.org/route/v1/`,
        language: 'fr'
      }),
      addWaypoints: false,
      routeWhileDragging: false,
      showAlternatives: false,
      fitSelectedRoutes: false,
      show: false,
      // waypoints: [L.latLng(49.02275321906884, 1.1517542134257543), L.latLng(48.99275321906884, 1.1517542134257543)],
      geocoder: (L.Control as any).Geocoder.nominatim(),
      
    }).addTo(this.map);

    new Geocoder({position: 'topleft'}).addTo(this.map);
    
  }
  
  ngOnDestroy() {
    this.map.clearAllEventListeners;
    this.map.remove();
  };
}

function compare(a: any | string, b: any | string) {
  return (a != b ? -1 : 1);
}