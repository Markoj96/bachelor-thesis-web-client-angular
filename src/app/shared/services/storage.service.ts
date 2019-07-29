import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToken(token) {
    localStorage.setItem('marfi-roleplay-token', token);
  }

  public getToken() {
    return localStorage.getItem('marfi-roleplay-token');
  }

  public clearStorage() {
    localStorage.removeItem('marfi-roleplay-token');
  }
}
