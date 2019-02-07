// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelService } from './services/panel.service';
import { PanelStatusService } from './services/panel-status.service';
import { SidePanelHeaderComponent } from './components/panel-header/panel-header.component';
import { SidePanelBodyComponent } from './components/panel-body/panel-body.component';
import { SidePanelFooterComponent } from './components/panel-footer/panel-footer.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        PanelComponent,
        PanelContainerComponent,
        SidePanelHeaderComponent,
        SidePanelBodyComponent,
        SidePanelFooterComponent
    ],
    providers: [PanelService, PanelStatusService],
    exports: [PanelContainerComponent, SidePanelHeaderComponent, SidePanelBodyComponent, SidePanelFooterComponent]
})
export class SidePanelModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SidePanelModule,
            providers: [PanelStatusService, PanelService]
        };
    }
}
