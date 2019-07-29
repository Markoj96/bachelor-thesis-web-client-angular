import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../vehicles/vehicles.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.scss']
})
export class ShowVehicleComponent implements OnInit {

  private vehicle = null;
  private id = null;

  constructor(private vehiclesService: VehiclesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      response => {
        this.id = response['id'];
        this.getVehicle(this.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  public getVehicle(id) {
    this.vehiclesService.getVehicle(id)
      .subscribe(
        response => {
          this.vehicle = response;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
