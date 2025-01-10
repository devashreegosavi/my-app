import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface IdeactivateGuard{
    canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}

export class DeactivateGuardService implements CanDeactivate<IdeactivateGuard>{
    canDeactivate(
        component: IdeactivateGuard, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot,
         nextState: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{
        return component.canExit();
    }
}