import { NgModule } from '@angular/core';

import { PanelBodyFakeComponent } from './panel-body-fake.component';
import { PanelContainerFakeComponent } from './panel-container-fake.component';
import { PanelFakeComponent } from './panel-fake.component';
import { PanelFakeService } from './panel-fake.service';
import { PanelFooterFakeComponent } from './panel-footer-fake.component';
import { PanelHeaderFakeComponent } from './panel-header-fake.component';
import { PanelStatusFakeService } from './panel-status-fake.service';


const EXPORTS = [
    PanelFakeComponent,
    PanelContainerFakeComponent,
    PanelHeaderFakeComponent,
    PanelBodyFakeComponent,
    PanelFooterFakeComponent
];

@NgModule({
    declarations: [...EXPORTS],
    exports: [...EXPORTS],
    providers: [PanelStatusFakeService, PanelFakeService]
})
export class PanelFakeModule {}
