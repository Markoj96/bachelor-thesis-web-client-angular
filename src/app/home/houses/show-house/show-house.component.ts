import { Component, OnInit } from '@angular/core';
import {HousesService} from '../../houses/houses.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-show-house',
  templateUrl: './show-house.component.html',
  styleUrls: ['./show-house.component.scss']
})
export class ShowHouseComponent implements OnInit {

  private house = null;
  private id = null;
  private houseMapURL: SafeResourceUrl;

  constructor(private housesService: HousesService, private route: ActivatedRoute, private domSanitizer: DomSanitizer) { }

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
          this.houseMapURL = this.domSanitizer.bypassSecurityTrustResourceUrl('http://jovanovicmarko.me/maps/house.html?x=' + this.house.enterX + '&y=' + this.house.enterY);
        },
        error => {
          console.log(error);
        }
      );
  }
}
