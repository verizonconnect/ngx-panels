// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelService } from './services/panel.service';
import { PanelStatusService } from './services/panel-status.service';
import { PanelHeaderComponent } from './components/panel-header/panel-header.component';
import { PanelBodyComponent } from './components/panel-body/panel-body.component';
import { PanelFooterComponent } from './components/panel-footer/panel-footer.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        PanelComponent,
        PanelContainerComponent,
        PanelHeaderComponent,
        PanelBodyComponent,
        PanelFooterComponent
    ],
    providers: [PanelService, PanelStatusService],
    exports: [PanelContainerComponent, PanelHeaderComponent, PanelBodyComponent, PanelFooterComponent]
})
export class PanelModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PanelModule,
            providers: [PanelStatusService, PanelService]
        };
    }
}
