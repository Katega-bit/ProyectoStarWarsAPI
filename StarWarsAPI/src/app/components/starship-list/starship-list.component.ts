import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/interfaces/starship.interface';
import { StarshipService } from 'src/app/service/starship.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  starshipList:  Starship[] = [];
  numPages = 0;
  constructor(private starshipService : StarshipService) { }

  ngOnInit(): void {
    this.getStarshipPage(1);

  }

  showImg(starship : Starship){

    let id = starship.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`

  }



  getStarshipPage(page: number) {
    this.starshipService.getStarship(page).subscribe(resp =>  {
      this.starshipList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

}