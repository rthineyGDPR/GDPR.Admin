import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbProgressBarModule,
  NbTooltipModule,
  NbCardModule,
  NbDialogModule,
  NbListModule,
  NbOverlayModule,
  NbPopoverModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbToastrModule,
  NbTreeGridModule,
  NbDatepickerModule,
  NbSidebarService,
  NbMenuService,
  NbSearchService,
  NbIconLibraries,
  NbWindowModule,
  NbCheckboxModule,
  NbAccordionModule,
  NbBadgeModule,
  NbInputModule,
  NbAlertModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { NbMomentDateModule } from '@nebular/moment';
import {
  FooterComponent,
  HeaderComponent,
  LayoutDirectionSwitcherComponent,
  SearchInputComponent,
  SwitcherComponent
} from './components';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe } from './pipes';
import {
  OneColumnLayoutComponent,
  OneColumnLayoutHeaderComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { MomentModule } from 'ngx-moment';
import { HighlighterDirective } from './directives/gdpr-highlight';

const NB_MODULES = [
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbBadgeModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbMomentDateModule,
  NbOverlayModule,
  NbPopoverModule,
  NbSearchModule,
  NbSecurityModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbThemeModule,
  NbToastrModule,
  NbTooltipModule,
  NbTreeGridModule,
  NbUserModule,
  NbWindowModule,
  NbButtonModule
];
const COMPONENTS = [
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  OneColumnLayoutComponent,
  OneColumnLayoutHeaderComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
];
const PIPES = [CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe, HighlighterDirective];

@NgModule({
  imports: [CommonModule, MomentModule, ...NB_MODULES],
  exports: [CommonModule, MomentModule, ...NB_MODULES, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'dark'
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]
        ).providers
      ]
    } as ModuleWithProviders;
  }
}
