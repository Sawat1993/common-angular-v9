import { Injectable } from '@angular/core';

import { BrowserStorageService } from './browser-storage.service';

declare function require(name: string);
const jwtDecode = require('jwt-decode');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private tokenKey = 'token';

  constructor(private browserStorageService: BrowserStorageService) { }

  saveToken(token) {
    this.browserStorageService.saveData(this.tokenKey, token);
  }

  getToken() {
    return this.browserStorageService.getData(this.tokenKey);
  }

  getUserDetail() {
    let token = this.getToken();
    if (token) {
      token = jwtDecode(token);
      if (token) {
          return token.sub;
      }
    }
    return true;
  }

}
