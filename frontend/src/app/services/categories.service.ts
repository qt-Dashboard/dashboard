import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  apiURLCategories = environment.apiURL + 'category';  

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const categories = this.http.get<Category[]>(`${this.apiURLCategories}`);
    return categories;
  }

  getCategory(categoryId: string): Observable<any> {
    return this.http.get<any>(`${this.apiURLCategories}/update/${categoryId}`);
  }

  createCategory(name: string, icon: File): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('icon', icon);           
    return this.http.post<any>(`${this.apiURLCategories}/create`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  updateCategory(name: string, icon: File, id: string): Observable<any> {
    let formData: FormData = new FormData();  
    formData.set('name', name);
    formData.set('icon', icon);
    return this.http.patch<any>(`${this.apiURLCategories}/update/${id}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete<Category>(`${this.apiURLCategories}/delete/${categoryId}`);
  }
}