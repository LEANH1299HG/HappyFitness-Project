import { Component, Input, OnInit, Renderer2 } from "@angular/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { Location, PopStateEvent } from "@angular/common";
import { ROUTES2 } from "../sidebar/sidebar.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from 'src/app/services/services/auth.service';

@Component({
  selector: "app-navbar-customer",
  templateUrl: "./navbar-customer.component.html",
  styleUrls: ["./navbar-customer.component.scss"],
})
export class NavbarCustomerComponent implements OnInit {
  public isCollapsed = true;
  public focus;
  public roleNumber: any;
  public userName: any;
  public shouldShowNav = false;
  listTitles: any[];
  @Input() public managerNavbar: any;
  @Input() public customerNavbar: any;
  @Input() public guestNavbar: any;
  // @Input() public username: any;
  @Input() public id: any;

  constructor(
    public location: Location,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog, private renderer: Renderer2,
    // private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = window.location.pathname;
        const segments = url.split('/');
        this.shouldShowNav = segments[segments.length - 1] != 'login';
        this.takeOwnInfo()
      }
    })
    
  }

  takeOwnInfo() {
    this.authService.getOwnInfo().subscribe({
      next: (res) => {
        if (res.body.role && (res.body.role.id !== 1 && res.body.role.id !== 2)) {
          this.router.navigate([`/home`])
          return
        }

        this.roleNumber = res.body.role.id
        this.userName = res.body.username
      }, // nextHandler
      error: (err) => {
        this.roleNumber = null
        this.userName = null
        return
      }, // errorHandler
    })
  }

  refresh() {
    this.managerNavbar = false;
    this.customerNavbar = false;
    this.guestNavbar = true;
  }

  handleLogout () {
    this.authService.signout()
  }

}
