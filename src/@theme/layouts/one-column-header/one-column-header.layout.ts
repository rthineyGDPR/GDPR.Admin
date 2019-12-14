import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-header-layout',
  styleUrls: ['./one-column-header.layout.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>
      <nb-layout-header subheader>
        <nb-actions>
          <nb-action icon="home-outline"></nb-action>
          <nb-action icon="search-outline"></nb-action>
          <nb-action icon="edit-outline"></nb-action>
        </nb-actions>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class OneColumnLayoutHeaderComponent {}
