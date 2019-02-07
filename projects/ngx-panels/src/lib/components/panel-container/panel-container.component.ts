// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { Component, ViewContainerRef, ViewChild, OnInit } from '@angular/core';

import { PanelRef } from '../../classes/panel-ref.class';
import { Stack } from '../../classes/stack.class';
import { PanelService } from '../../services/panel.service';

@Component({
    selector: 'ngx-panel-container',
    templateUrl: './panel-container.component.html',
    styleUrls: ['./panel-container.component.scss']
})
export class PanelContainerComponent implements OnInit {
    private panels: Stack<PanelRef<any>> = new Stack<PanelRef<any>>();

    @ViewChild('panelContainer', { read: ViewContainerRef })
    viewContainer: ViewContainerRef;

    constructor(private panelService: PanelService) {}

    ngOnInit() {
        this.panelService.setContainer(this);
    }

    startClosingAnimation() {
        const panelRef: PanelRef<any> = this.panels.peek();
        panelRef.panelComponentRef.instance.startCloseAnimation();
    }

    destroyTopPanel() {
        const panelRef: PanelRef<any> = this.panels.pop();
        panelRef.panelComponentRef.destroy();
    }

    addTopPanel(panelRef: PanelRef<any>) {
        this.panels.push(panelRef);
        this.viewContainer.insert(panelRef.panelComponentRef.hostView);
    }

    destroyAll() {
        this.panels.getAll().forEach(panel => {
            panel.panelComponentRef.destroy();
        });
        this.panels.empty();
    }
}
