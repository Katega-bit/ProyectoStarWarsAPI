import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/service/people.service';
import { FilmService } from 'src/app/service/film.service';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
