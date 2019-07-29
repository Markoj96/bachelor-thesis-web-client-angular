import { Component, OnInit } from '@angular/core';
import {SpecialBusinessesService} from '../../special-businesses/special-businesses.service';

@Component({
  selector: 'app-list-special-businesses',
  templateUrl: './list-special-businesses.component.html',
  styleUrls: ['./list-special-businesses.component.scss']
})
export class ListSpecialBusinessesComponent implements OnInit {

  private specialBusinesses = null;

  constructor(private specialBusinessesService: SpecialBusinessesService) { }

  ngOnInit() {
    this.getSpecialBusinesses();
  }

  public getSpecialBusinesses() {
    this.specialBusinessesService.getSpecialBusinesses()
      .subscribe(
        response => {
          this.specialBusinesses = response;
        },
        error => {
          console.log(error);
        }
      );
  }
}
