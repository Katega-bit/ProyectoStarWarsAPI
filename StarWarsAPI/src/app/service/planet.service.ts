import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';
import { FilmResponse } from '../interfaces/film.interface';
import { environment } from 'src/environments/environment';
import { PlanetResponse } from '../interfaces/planets.interface';
import { SpeciesResponse } from '../interfaces/species.interface';
import { VehicleResponse } from '../interfaces/vehicles.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

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

  getVehicles(page: number): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>(`${environment.apiBaseUrl}/vehicles?page=${page}`);
  }

  getPlanets(page: number): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(`${environment.apiBaseUrl}/planets?page=${page}`);
  }
}