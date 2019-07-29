import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialBusinessesService {

  private baseURL = environment.baseURL;
  private specialBusinessesURL = `${this.baseURL}/special_businesses/`;

  constructor(private http: HttpClient) { }

  public getSpecialBusiness(id) {
    return this.http.get(`${this.specialBusinessesURL}` + id);
  }

  public getSpecialBusinesses() {
    return this.http.get(`${this.specialBusinessesURL}`);
  }
}
