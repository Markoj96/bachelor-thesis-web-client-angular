import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private baseURL = environment.baseURL;
  private vehiclesURL = `${this.baseURL}/vehicles/`;

  constructor(private http: HttpClient) { }

  public getVehicle(id) {
    return this.http.get(`${this.vehiclesURL}` + id);
  }

  public getVehicles() {
    return this.http.get(`${this.vehiclesURL}`);
  }
}
