import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
// import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // if (this.authService.isTokenExpired()) {
    //   this.authService.setAuthenticationStatus(false);
    //   sessionStorage.removeItem("token");
    //   this.router.navigate(["/login"]);
    //   return false;
    // }
    return true;
  }
}
