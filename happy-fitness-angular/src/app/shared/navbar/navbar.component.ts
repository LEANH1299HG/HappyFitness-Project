import { Component, Input, OnInit } from "@angular/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { Location, PopStateEvent } from "@angular/common";
import { ROUTES2 } from "../sidebar/sidebar.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public focus;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  listTitles: any[];
  @Input() public managerNavbar: any;
  @Input() public customerNavbar: any;
  @Input() public guestNavbar: any;
  @Input() public username: any;
  @Input() public id: any;

  constructor(
    public location: Location,
    private router: Router,
    // private authService: AuthService,
    // private cacheService: CacheService
  ) { }

  ngOnInit() {
    // if (!this.authService.getJwtToken()) {
    //   this.username = '';
    // }

    if (this.managerNavbar) {
      this.listTitles = ROUTES2.filter((listTitle) => listTitle);
    }

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else window.scrollTo(0, 0);
      }
    });
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
  }

  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if (titlee === "home") {
      return true;
    } else {
      return false;
    }
  }

  getTitle() {
    var titlee = this.location.path();
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "";
  }

  logout() {
    // this.authService.signout().subscribe({
    //   next: () => {
    //     sessionStorage.removeItem("roleName");
    //     this.authService.setAuthenticationStatus(false);
    //     this.cacheService.setHasClearedCache(true);
    //     this.router.navigate(["/login"]);
    //   },
    // });
  }

  refresh() {
    this.managerNavbar = false;
    this.customerNavbar = false;
    this.guestNavbar = true;
  }
}
