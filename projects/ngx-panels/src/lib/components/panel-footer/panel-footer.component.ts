// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ngx-panel-footer',
    templateUrl: './panel-footer.component.html',
    styleUrls: ['./panel-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelFooterComponent {
    @Input()
    autoPadding = true;
}
