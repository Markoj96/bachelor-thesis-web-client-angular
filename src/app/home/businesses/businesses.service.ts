import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {

  private baseURL = environment.baseURL;
  private businessesURL = `${this.baseURL}/businesses/`;

  constructor(private http: HttpClient) { }

  public getBusiness(id) {
    return this.http.get(`${this.businessesURL}` + id);
  }

  public getBusinesses() {
    return this.http.get(`${this.businessesURL}`);
  }
}
