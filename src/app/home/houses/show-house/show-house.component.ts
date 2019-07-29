import { Component, OnInit } from '@angular/core';
import {HousesService} from '../../houses/houses.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-house',
  templateUrl: './show-house.component.html',
  styleUrls: ['./show-house.component.scss']
})
export class ShowHouseComponent implements OnInit {

  private house = null;
  private id = null;

  constructor(private housesService: HousesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      response => {
        this.id = response['id'];
        this.getHouse(this.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  public getHouse(id) {
    this.housesService.getHouse(id)
      .subscribe(
        response => {
          this.house = response;
        },
        error => {
          console.log(error);
        }
      );
  }
}
