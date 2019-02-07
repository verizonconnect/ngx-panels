// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-panel-body',
    template: '<ng-content></ng-content>'
})
export class PanelBodyFakeComponent {
    @Input()
    autoPadding;
}
