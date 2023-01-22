import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private router: Router,
    private ls:LocalstorageService){
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let appKey:string = this.ls.activeAppKey;
    if (appKey) {
        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/adminlogin'], { queryParams: { returnUrl: state.url }});
    return false;
}
  
}
