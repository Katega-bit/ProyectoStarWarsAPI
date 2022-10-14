import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planets.interface';
import { VehiclesService } from 'src/app/service/vehicles.service';
import { PlanetService } from 'src/app/service/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planetList:  Planet[] = [];
  numPages = 0;
  constructor(private planetService : PlanetService) { }

  ngOnInit(): void {
    this.getPlanetsPage(1);

  }

  showImg(planet : Planet){

    let id = planet.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

  }



  getPlanetsPage(page: number) {
    this.planetService.getPlanets(page).subscribe(resp =>  {
      this.planetList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

}