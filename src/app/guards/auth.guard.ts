import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    isLogged: boolean;
  constructor(private auth: LoginService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | false | UrlTree {
        this.isLogged = this.auth.token ? true: false; 
        
        if(!this.isLogged) {
            this.router.navigate(['login'])
        }

        return this.isLogged;
  }
}