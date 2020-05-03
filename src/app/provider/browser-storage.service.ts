import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor() { }

  saveData(key, value) {
    sessionStorage.setItem(key, value);
  }

  getData(key) {
    return sessionStorage.getItem(key);
  }
}
