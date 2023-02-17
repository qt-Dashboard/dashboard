import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  apiURLUsers = environment.apiURL + 'user';  

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const users = this.http.get<User[]>(`${this.apiURLUsers}`);
    return users;
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiURLUsers}/update/${userId}`);
  }

  createUser(firstName: string, lastName: string, role: string, email: string, password: string, avatar: File): Observable<any> { 
    let formData: FormData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);      
    formData.append('role', role);      
    formData.append('email', email);      
    formData.append('password', password);      
    formData.append('avatar', avatar);       
    return this.http.post<any>(`${this.apiURLUsers}/register`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  updateUser(firstName: string, lastName: string, role: string, email: string, password: string, avatar: File, id: string): Observable<any> {
    let formData: FormData = new FormData();
    formData.set('firstName', firstName);
    formData.set('lastName', lastName);
    formData.set('role', role);
    formData.set('email', email);
    formData.set('password', password);
    formData.set('avatar', avatar);
    return this.http.patch<any>(`${this.apiURLUsers}/update/${id}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<User>(`${this.apiURLUsers}/delete/${userId}`);
  }
}