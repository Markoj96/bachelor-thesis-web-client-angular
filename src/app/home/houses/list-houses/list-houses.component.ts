import { Component, OnInit } from '@angular/core';
import {HousesService} from '../../houses/houses.service';

@Component({
  selector: 'app-list-houses',
  templateUrl: './list-houses.component.html',
  styleUrls: ['./list-houses.component.scss']
})
export class ListHousesComponent implements OnInit {

  private houses = null;

  constructor(private housesService: HousesService) { }

  ngOnInit() {
    this.gethouses();
  }

  public gethouses() {
    this.housesService.getHouses()
      .subscribe(
        response => {
          this.houses = response;
        },
        error => {
          console.log(error);
        }
      );
  }
}
