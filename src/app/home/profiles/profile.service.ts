import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseURL = environment.baseURL;
  private profileURL = `${this.baseURL}/users/`;

  constructor(private http: HttpClient) { }

  public getProfile(id) {
    return this.http.get(`${this.profileURL}` + id);
  }
}
