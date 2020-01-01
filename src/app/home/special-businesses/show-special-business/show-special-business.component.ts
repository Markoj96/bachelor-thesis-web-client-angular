import { Component, OnInit } from '@angular/core';
import {SpecialBusinessesService} from '../../special-businesses/special-businesses.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-special-business',
  templateUrl: './show-special-business.component.html',
  styleUrls: ['./show-special-business.component.scss']
})
export class ShowSpecialBusinessComponent implements OnInit {

  private specialBusiness = null;
  private id = null;

  constructor(private specialBusinessesService: SpecialBusinessesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      response => {
        this.id = response['id'];
        this.getSpecialBusiness(this.id);
      },
      error => {
        console.log(error);
      });
  }

  public getSpecialBusiness(id) {
    this.specialBusinessesService.getSpecialBusiness(id).subscribe(
        response => {
          this.specialBusiness = response;
        },
        error => {
          console.log(error);
        });
  }
}
