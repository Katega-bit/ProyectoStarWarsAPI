import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';
import { FilmResponse } from '../interfaces/film.interface';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }


  getFilm(page: number): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(`${environment.apiBaseUrl}/films?page=${page}`);
  }
  getPeople(page: number): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${environment.apiBaseUrl}/people?page=${page}`);
  }
}