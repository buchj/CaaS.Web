import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../shared/services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveuserGuard implements CanActivate {
  constructor(
    private router: Router,
    private ls:LocalstorageService){
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user:number = this.ls.activeCustomerId;
    if (user) {
        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
}
