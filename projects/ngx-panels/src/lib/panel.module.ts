import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PanelBodyComponent } from './components/panel-body/panel-body.component';
import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { PanelFooterComponent } from './components/panel-footer/panel-footer.component';
import { PanelHeaderComponent } from './components/panel-header/panel-header.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelStatusService, NGX_PANELS_CONFIG } from './services/panel-status.service';
import { PanelService } from './services/panel.service';
import { PanelConfig, DefaultPanelConfig } from './classes/config.class';

@NgModule({
    imports: [CommonModule],
    declarations: [
        PanelComponent,
        PanelContainerComponent,
        PanelHeaderComponent,
        PanelBodyComponent,
        PanelFooterComponent
    ],
    entryComponents: [PanelComponent, PanelContainerComponent],
    providers: [PanelService, PanelStatusService],
    exports: [PanelContainerComponent, PanelHeaderComponent, PanelBodyComponent, PanelFooterComponent]
})
export class PanelModule {
    static forRoot(config: Partial<PanelConfig> = new DefaultPanelConfig()): ModuleWithProviders {
        return {
            ngModule: PanelModule,
            providers: [PanelStatusService, PanelService, { provide: NGX_PANELS_CONFIG, useValue: config }],
        };
    }
}
