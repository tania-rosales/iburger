import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})

export class LoginGuardian implements CanActivate{

  constructor (private loginService: LoginService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if (this.loginService.estaLogueado()){
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
}