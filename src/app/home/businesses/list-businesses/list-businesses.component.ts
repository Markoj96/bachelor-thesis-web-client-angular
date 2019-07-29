import { Component, OnInit } from '@angular/core';
import {BusinessesService} from '../businesses.service';

@Component({
  selector: 'app-list-businesses',
  templateUrl: './list-businesses.component.html',
  styleUrls: ['./list-businesses.component.scss']
})
export class ListBusinessesComponent implements OnInit {

  private businesses = null;

  constructor(private businessesService: BusinessesService) { }

  ngOnInit() {
    this.getBusinesses();
  }

  public getBusinesses() {
    this.businessesService.getBusinesses()
      .subscribe(
        response => {
          this.businesses = response;
        },
        error => {
          console.log(error);
        }
      );
  }
}
