import { Component, OnInit } from '@angular/core';
import { CoreApiService, UserData } from '../../../api/core-api.service';
import { environment } from '../../../../environments/environment';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <table style="width:100%">
      <tr>
        <td style="width:25%;text-align:left">© {{ year }} SafeGuard Privacy</td>
        <td style="width:30%;text-align: center">
          <a [title]="version" href="www.safeguard.com" target="_parent"
            ><img height="30px" [src]="env.cdn + '/assets/images/logo-tm.png'"
          /></a>
        </td>
        <td style="width:25%;text-align:right">
          <img
            [title]="apiUrl"
            class="ng-star-inserted"
            src="https://img.shields.io/badge/Version-{{
              version
            }}-orange.svg?style=plastic&amp;logo=git&amp;logoColor=white&amp;link=https://www.safeguardgdpr.com&amp;link={{
              apiUrl
            }}/swagger"
          />&nbsp;
          <img
            [title]="apiUrl"
            class="ng-star-inserted"
            src="https://img.shields.io/badge/Build-{{
              buildDate | amLocal | amDateFormat: 'MMM Do YYYY, h:mma'
            }}-blue.svg?style=plastic&amp;logo=.net&amp;logoColor=white&amp;link=https://www.safeguardgdpr.com&amp;link={{
              apiUrl
            }}/swagger"
          />
        </td>
        <td style="width:7%;text-align:right"></td>
      </tr>
    </table>
  `
})
export class FooterComponent implements OnInit {
  version = '1.0.0';
  year = '';
  imageUrl: string;
  env: any;
  apiUrl: any;
  buildDate: string;
  color: string;
  showSettings: boolean;
  showDarktheme: boolean;
  showMinisidebar: boolean;
  constructor(private auth: AccountService, private api: CoreApiService) {
    this.env = environment;
    this.imageUrl = this.env.cdn + '/assets/images/check.png';
    this.version = this.env.version;
    this.apiUrl = this.env.apiUrl;
  }

  ngOnInit() {
    this.api.account_GetUserData().subscribe((user: UserData) => {
      if (user.employee && user.company) {
        this.version = user.company.siteVersion;
        this.buildDate = user.company.buildDate;
        this.color = user.employee.color;
        this.showSettings = user.employee.showSettings;
        this.showDarktheme = user.employee.showDarktheme;
        this.showMinisidebar = user.employee.showMinisidebar;
      }
    });
  }
}
