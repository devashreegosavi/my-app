import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{
    constructor(private authservice : AuthService, private router : Router){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ) : boolean | Promise<boolean> | Observable<boolean>{
        let isLoggedIn = this.authservice.isAuthenticated();
        if(isLoggedIn){
            return true;
        }else{
            this.router.navigate(['/'])
            return false;
        }
        
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.canActivate(childRoute, state);
    }
}