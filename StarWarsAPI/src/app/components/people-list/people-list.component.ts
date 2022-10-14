import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { People } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList:  People[] = [];
  numPages = 0;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {

    this.getPeoplePage(1);


  }

  showImg(people : People){

    let id = people.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

  }

  showMovie(people : People, film : Film){
    for (let pelicula of people.films) {
      if(pelicula==film.url){
        return film.title;
        }
      }

      return null;
  }

  getPeoplePage(page: number) {
    this.peopleService.getPeople(page).subscribe(resp =>  {
      this.peopleList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }
}
