import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { People } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/service/people.service';
import { FilmService } from 'src/app/service/film.service';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList:  Film[] = [];
  numPages = 0;
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilmPage(1);
  }

  showImg(films: Film){

    let id = films.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`

  }

  getFilmPage(page: number) {
    this.filmService.getFilm(page).subscribe(resp =>  {
      this.filmList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

}
