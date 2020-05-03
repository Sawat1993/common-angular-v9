import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AsyncHttpService } from '../../provider/async-http.service';
import { UserService } from '../../provider/user.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  imageDomain = environment.imageDomain;

  constructor(private formBuilder: FormBuilder,
              private asyncHttpService: AsyncHttpService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.asyncHttpService.post(environment.apiDomain + 'login', this.loginForm.value).subscribe(data => {
      // tslint:disable-next-line:curly
      if (!data) return;
      this.userService.saveToken(data.token);
      // console.log(this.userService.getUserDetail());
      this.router.navigate(['home']);
    });
  }

  getControl(name) {
    return this.loginForm.controls[name];
  }

}
