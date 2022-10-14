import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';
import { FilmResponse } from '../interfaces/film.interface';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }


  getFilm(page: number): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(`${environment.apiBaseUrl}/films?page=${page}`);
  }

}