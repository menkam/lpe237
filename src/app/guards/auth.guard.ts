import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/auth/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // tslint:disable-next-line:indent
  constructor(
      private router: Router,
      private authService: AuthenticationService
  ) {}

  canActivate(
      /*next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;*/
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const currentUser = this.authService.isLoggedIn;
      if (currentUser) {
        // authorised so return true
        return true;
     }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/welcome']);
      return false;
  }
}
