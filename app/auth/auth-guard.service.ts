import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivateChild, CanLoad } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ToastrService } from "ngx-toastr";
import { Route } from "@angular/compiler/src/core";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router, private tostr: ToastrService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            return true
        } else {
            this.tostr.warning('please login first', 'warning');
            this.router.navigate(['/login'])
        }
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state)
    }
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            return true
        } else {
            this.tostr.warning('please login first', 'warning');
            this.router.navigate(['/login'])
        }
    }
}