import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare interface RouteInfoManager {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES2: RouteInfoManager[] = [
  { path: '/dashboard', title: 'Thống kê', icon: 'ni-tv-2', class: '' },
  { path: '/account', title: 'Tài khoản', icon: 'ni-tv-2', class: '' },
  { path: '/order', title: 'Đơn đặt', icon: 'ni-tv-2', class: '' },
  { path: '/product', title: 'Sản phẩm', icon: 'ni-tv-2', class: '' },
  { path: '/report', title: 'Báo cáo', icon: 'ni-tv-2', class: '' },
  { path: '/term', title: 'Điều khoản', icon: 'ni-tv-2', class: '' },
  { path: '/system', title: 'Cơ sở', icon: 'ni-tv-2', class: '' },
  // { path: '/list-customer', title: 'Danh sách nhân viên', icon: 'ni-bullet-list-67 text-red', class: '' },
  // { path: '/booking-management', title: 'Quản lý dịch vụ', icon: 'ni-bullet-list-67 text-red', class: '' },
];



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public menuItemsCleaner: any[];
  public menuItemsManager: any[];
  public menuItemsAdmin: any[];
  public menuItemsLead: any[];
  public isCollapsed = true;
  @Input() public adminNavbar: any;
  @Input() public cleanerNavbar: any;
  @Input() public leadNavbar: any;
  @Input() public managerNavbar: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.menuItemsManager = this.setActiveClassManager(ROUTES2);
  }

  ngOnInit() {
    // if (this.cacheService.getHasClearedCache()) {
    //   this.refresh();

    //   this.cacheService.setHasClearedCache(false);
    // }

    this.route.url.subscribe(segments => {
      const currentUrl = segments.join('/');
      if (this.managerNavbar) {
        this.menuItemsManager = this.setActiveClassManager(ROUTES2, currentUrl);
        this.menuItemsManager = ROUTES2.filter(menuItem => menuItem);
      }
    });


    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }

  private setActiveClassManager(routes: RouteInfoManager[], currentUrl: string = ''): RouteInfoManager[] {
    return routes.map(route => {
      route.class = (route.path === currentUrl) ? 'text-primary' : '';
      return route;
    });
  }

  logout() {
    // this.authService.signout().subscribe({
    //   next: () => {
    //     this.router.navigate(["/login"]);
    //   },
    // });
  }

  refresh() {
    this.managerNavbar = false;
  }
}
