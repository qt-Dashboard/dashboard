import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Markers } from '../models/marker.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {
  
  apiURLMarkers = environment.apiURL + 'marker';  

  constructor(private http: HttpClient) {}

  getMarkers(): Observable<Markers[]> {
    const markers = this.http.get<Markers[]>(`${this.apiURLMarkers}`);    
    return markers;
  }

  getMarker(markerId: string): Observable<Markers> {
    return this.http.get<Markers>(`${this.apiURLMarkers}/update/${markerId}`);
  }

  createMarker(marker: Markers): Observable<Markers> {         
    return this.http.post<Markers>(`${this.apiURLMarkers}/create`, marker);
  }

  updateMarker(marker: Markers): Observable<Markers> {
    return this.http.patch<Markers>(`${this.apiURLMarkers}/update/${marker._id}`, marker);
  }

  deleteMarker(markerId: string): Observable<Markers> {
    return this.http.delete<Markers>(`${this.apiURLMarkers}/delete/${markerId}`);
  }
}