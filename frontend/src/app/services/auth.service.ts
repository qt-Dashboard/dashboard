import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://localhost:3300/user/'
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(password: string, email: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {email, password}, httpOptions);
  }

  register(firstName: string, lastName: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {firstName, lastName, email, password, role}, httpOptions);
  }
}
