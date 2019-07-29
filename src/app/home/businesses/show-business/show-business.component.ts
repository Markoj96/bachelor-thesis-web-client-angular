import { Component, OnInit } from '@angular/core';
import {BusinessesService} from '../businesses.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-business',
  templateUrl: './show-business.component.html',
  styleUrls: ['./show-business.component.scss']
})
export class ShowBusinessComponent implements OnInit {

  private business = null;
  private id = null;

  constructor(private businessesService: BusinessesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      response => {
        this.id = response['id'];
        this.getBusiness(this.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  public getBusiness(id) {
    this.businessesService.getBusiness(id)
      .subscribe(
        response => {
          this.business = response;
        },
        error => {
          console.log(error);
        }
      );
  }
}
