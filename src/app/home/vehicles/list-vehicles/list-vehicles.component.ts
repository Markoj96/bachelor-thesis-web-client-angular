import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../vehicles.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.scss']
})
export class ListVehiclesComponent implements OnInit {

  private vehicles = null;

  constructor(private vehiclesServices: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  public getVehicles() {
    this.vehiclesServices.getVehicles()
      .subscribe(
        response => {
          this.vehicles = response;
        },
        error => {
          console.log(error);
        }
      );
  }
}
