import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  private auth: AuthService;
  private router: Router;
  
  constructor(auth: AuthService, router: Router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let authenticated = this.auth.isAuthenticated();
      if(!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    return authenticated;
  }
  
}
