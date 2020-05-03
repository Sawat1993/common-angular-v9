import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-header></app-header>
    <div style="padding-top: 50px;padding-bottom:35px;">
    <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
    `
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
