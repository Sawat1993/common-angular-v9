import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(public router: Router, private userService: UserService) { }
    canActivate(): boolean {
        if (this.userService.getUserDetail()) {
            return true;
        }
        this.router.navigate(['login']);
    }
}
