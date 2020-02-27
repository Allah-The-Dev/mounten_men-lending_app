import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, Route} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(window.sessionStorage.getItem('token') && JSON.parse(window.sessionStorage.getItem('token')).access_token){
      return true;
    }

    this.router.navigate(['/']);
    return false;

  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string){
    if(window.sessionStorage.getItem('token') && JSON.parse(window.sessionStorage.getItem('token')).access_token){
      return true;
    }

    this.redirectUrl = url;

    this.router.navigate(['/']);
    return false;
  }
}
