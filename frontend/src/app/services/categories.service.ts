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

  getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiURLCategories}/update/${categoryId}`);
  }

  createCategory(category: Category): Observable<Category> {        
    return this.http.post<Category>(`${this.apiURLCategories}/create`, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.patch<Category>(`${this.apiURLCategories}/update/${category._id}`, category);
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete<Category>(`${this.apiURLCategories}/delete/${categoryId}`);
  }
}