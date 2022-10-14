import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicles.interface';
import { VehiclesService } from 'src/app/service/vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehiclesList:  Vehicle[] = [];
  numPages = 0;
  constructor(private vehicleService : VehiclesService) { }

  ngOnInit(): void {
    this.getVehiclesPage(1);

  }

  showImg(vehicles : Vehicle){

    let id = vehicles.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`

  }



  getVehiclesPage(page: number) {
    this.vehicleService.getVehicles(page).subscribe(resp =>  {
      this.vehiclesList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

}