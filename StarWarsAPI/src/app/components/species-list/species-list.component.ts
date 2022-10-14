import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/service/species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  speciesList:  Species[] = [];
  numPages = 0;
  constructor(private speciesService : SpeciesService) { }

  ngOnInit(): void {
    this.getSpeciesPage(1);
  }

  showImg(specie : Species){

    let id = specie.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`

  }



  getSpeciesPage(page: number) {
    this.speciesService.getSpecies(page).subscribe(resp =>  {
      this.speciesList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

}
