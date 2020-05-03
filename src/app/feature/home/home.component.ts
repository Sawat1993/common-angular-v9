import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AsyncHttpService } from '../../provider/async-http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  distributorData = [];
  masterDistributorData = [];

  constructor(private asyncHttpService: AsyncHttpService, private router: Router) { }

  ngOnInit() {
    this.asyncHttpService.get(environment.apiDomain + 'user').subscribe(data => {
      console.log('data--' + data);
    });
  }

}
