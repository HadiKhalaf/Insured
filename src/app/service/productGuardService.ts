import { Injectable } from "@angular/core"
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { AuthService } from "./auth.service"

@Injectable()
export class ProductGuardService implements CanActivate, CanActivateChild{
    constructor(private authservice:AuthService, private rout:Router){

    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return this.canActivate(childRoute,state)
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authservice.IsAuthenticated()){
            return true
        }else{
            this.rout.navigate(['/login'])
            return false
        }
    }

}