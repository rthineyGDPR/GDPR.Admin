import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { StateService } from '../services/state.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { TimelineComponent } from './shared/timeline/timeline.component';
import { LayoutService } from './utils/layout.service';
import { MomentModule } from 'ngx-moment';
import { CapitalizePipe } from '../@theme/pipes';

const DATA_SERVICES = [];

export const NB_CORE_PROVIDERS = [LayoutService, StateService];

@NgModule({
  imports: [CommonModule, MomentModule, MglTimelineModule],
  exports: [TimelineComponent],
  declarations: [TimelineComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS]
    };
  }
}
