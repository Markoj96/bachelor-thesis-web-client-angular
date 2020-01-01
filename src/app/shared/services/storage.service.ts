import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToken(token) {
    localStorage.setItem('marfi-roleplay-token', token);
  }

  public saveUser(user) {
    localStorage.setItem('marfi-roleplay-user', user);
  }

  public getToken() {
    return localStorage.getItem('marfi-roleplay-token');
  }

  public getUser() {
    return localStorage.getItem('marfi-roleplay-user');
  }

  public clearStorage() {
    localStorage.removeItem('marfi-roleplay-token');
  }
}
