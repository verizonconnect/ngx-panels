// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { PanelRef } from '../../classes/panel-ref.class';

@Component({
    selector: 'ngx-panel-header',
    templateUrl: './panel-header.component.html',
    styleUrls: ['./panel-header.component.scss']
})
export class PanelHeaderComponent implements OnInit {
    @Input()
    autoPadding = true;

    closeEnabled$: Observable<boolean>;

    constructor(private readonly panelRef: PanelRef<any>) {}

    ngOnInit() {
        this.closeEnabled$ = this.panelRef.closeEnabled$;
    }

    onCloseClick() {
        this.panelRef.close();
    }
}
