import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HousesService {

  private baseURL = environment.baseURL;
  private housesURL = `${this.baseURL}/houses/`;

  constructor(private http: HttpClient) { }

  public getHouse(id) {
    return this.http.get(`${this.housesURL}` + id);
  }

  public getHouses() {
    return this.http.get(`${this.housesURL}`);
  }
}
