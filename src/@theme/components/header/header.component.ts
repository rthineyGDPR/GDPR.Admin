import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';
import { User } from '../../../@core/models/account/user';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light'
    },
    {
      value: 'dark',
      name: 'Dark'
    },
    {
      value: 'cosmic',
      name: 'Cosmic'
    },
    {
      value: 'corporate',
      name: 'Corporate'
    },
    {
      value: 'gdpr',
      name: 'SafeGuard'
    }
  ];
  env: any;
  currentTheme = 'gdprdark';

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(
    private router: Router,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private authService: AccountService,
    private breakpointService: NbMediaBreakpointsService
  ) {
    this.env = environment;
  }
  getUser(payload: any): any {
    if (payload == null) {
      return null;
    }
    return <User>{
      displayableId: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
      name: `${payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname']} ${payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname']}`,
      userIdentifier: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
      role: payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
      id: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
      isAuthenticated: true,
      email: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
      first: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'],
      last: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'],
      imageUrl: environment.cdn + '/assets/images/check.png'
    };
  }
  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.user = this.authService.currentUser;

    // // .pipe(takeUntil(this.destroy$))
    // // .subscribe((users: any) => this.user = users);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe((isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl));

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe(themeName => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome() {
    // this.menuService.navigateHome();

    this.router.navigate(['/']);
    return false;
  }
}
