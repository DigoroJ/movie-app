import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

const baseUrl = 'http://localhost:8080/api/v1/movies/';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl);
  }

  get(id: any): Observable<Movie> {
    return this.http.get(`${baseUrl}/movie/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add_movie`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/movie/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/movie/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/delete`);
  }
  search(data: any): Observable<Movie[]> {

    return this.http.get<Movie[]>(`${baseUrl}/search/?${data}=${data}`);
  }
 
}