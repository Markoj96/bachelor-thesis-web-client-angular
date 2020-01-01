import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {ActivatedRoute} from '@angular/router';
import {StorageService} from '../../../shared/services/storage.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent implements OnInit {

  private id = null;
  private profile = null;

  constructor(private profileService: ProfileService, private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      response => {
        this.id = this.storageService.getUser();
        this.getProfile(this.id);
      },
        error => {
        console.log(error);
      });
  }

  public getProfile(id) {
    this.profileService.getProfile(id).subscribe(
      response => {
        this.profile = response;
      },
        error => {
        console.log(error);
      });
  }

}
