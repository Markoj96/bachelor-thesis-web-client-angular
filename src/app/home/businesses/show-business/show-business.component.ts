import { Component, OnInit } from '@angular/core';
import {BusinessesService} from '../businesses.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-show-business',
  templateUrl: './show-business.component.html',
  styleUrls: ['./show-business.component.scss']
})
export class ShowBusinessComponent implements OnInit {

  private business = null;
  private id = null;
  private businessMapURL: SafeResourceUrl;

  constructor(private businessesService: BusinessesService, private route: ActivatedRoute, private domSanitizer: DomSanitizer) { }

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
          this.businessMapURL = this.domSanitizer.bypassSecurityTrustResourceUrl('http://jovanovicmarko.me/maps/business.html?x=' + this.business.enterX + '&y=' + this.business.enterY);
        },
        error => {
          console.log(error);
        }
      );
  }
}
