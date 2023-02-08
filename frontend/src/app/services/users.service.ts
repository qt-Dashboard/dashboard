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

  createUser(user: User): Observable<User> {    
    console.log(user);
    
    return this.http.post<User>(`${this.apiURLUsers}/register`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiURLUsers}/update/${user._id}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<User>(`${this.apiURLUsers}/delete/${userId}`);
  }
}