// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ngx-panel-body',
    templateUrl: './panel-body.component.html',
    styleUrls: ['./panel-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelBodyComponent {
    @Input()
    autoPadding = true;
}
