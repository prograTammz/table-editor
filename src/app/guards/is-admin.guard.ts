import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
    isAdmin: boolean;
  constructor(private auth: LoginService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | false | UrlTree {
        this.isAdmin = this.auth.token?.role === 'admin';

        if(!this.isAdmin) {
            this.router.navigate(['app', 'welcome'])
        }

        return this.isAdmin;
  }
}