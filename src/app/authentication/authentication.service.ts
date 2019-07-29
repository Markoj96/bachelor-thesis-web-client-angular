import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {StorageService} from '../shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseURL = environment.baseURL;
  private loginURL = `${this.baseURL}/users/authenticate`;
  private registerURL = `${this.baseURL}/users/`;

  constructor(private http: HttpClient, private router: Router, private storageService: StorageService) { }

  public loginUser(user) {
    return this.http.post(this.loginURL, user);
  }

  public registerUser(user) {
    return this.http.post(this.registerURL, user);
  }

  public logoutUser() {
    this.storageService.clearStorage();
    this.router.navigate(['/authentication/login']);
  }

  public isLoggedIn() {
    return !!localStorage.getItem('marfi-roleplay-token');
  }
}
