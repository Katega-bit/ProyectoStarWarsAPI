import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/service/vehicles.service';
import { PlanetService } from 'src/app/service/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


}
