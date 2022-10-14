import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';
import { FilmResponse } from '../interfaces/film.interface';
import { environment } from 'src/environments/environment';
import { SpeciesResponse } from '../interfaces/species.interface';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }


  getFilm(page: number): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(`${environment.apiBaseUrl}/films?page=${page}`);
  }
  getPeople(page: number): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${environment.apiBaseUrl}/people?page=${page}`);
  }

  getSpecies(page: number): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(`${environment.apiBaseUrl}/species?page=${page}`);
  }
}