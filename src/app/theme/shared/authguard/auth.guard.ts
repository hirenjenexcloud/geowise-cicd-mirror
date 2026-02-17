import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router) {}

  private checkLogin(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }

    this.router.navigate(['/auth/signin']);
    return false;
  }

  canActivate(): boolean {
    console.log("AuthGuard: Checking authentication for route activation.");
    return this.checkLogin();
  }

  canActivateChild(): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.checkLogin();
  }
}
