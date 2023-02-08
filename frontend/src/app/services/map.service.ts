import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import 'leaflet-control-geocoder';
import { Observable } from 'rxjs';
import { Markers } from '../models/marker.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  baseUrl: string = 'http://localhost:3300/';

  constructor(private http: HttpClient) { }

  makeMarkers(map: L.Map): Observable<Markers> {
    const markers = this.http.get<Markers>(this.baseUrl + 'marker');
    return markers;
  }

  makeLayers(map: L.Map): Observable<Category> {
    const categories = this.http.get<Category>(this.baseUrl + 'category');
    return categories;
  }
}
