import { Component, OnInit, ViewChild, ViewContainerRef, Renderer2, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

import { PanelRef } from '../../classes/panel-ref.class';
import { Stack } from '../../classes/stack.class';
import { PanelService } from '../../services/panel.service';
import { isPlatformBrowser } from '@angular/common';



@Component({
    selector: 'ngx-panel-container',
    templateUrl: './panel-container.component.html',
    styleUrls: ['./panel-container.component.scss']
})
export class PanelContainerComponent implements OnInit {
    private panels: Stack<PanelRef<any>> = new Stack<PanelRef<any>>();

    @ViewChild('panelContainer', { read: ViewContainerRef })
    viewContainer: ViewContainerRef;

    constructor(
        private panelService: PanelService,
        private readonly renderer: Renderer2,
        private readonly elemRef: ElementRef,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}

    ngOnInit() {
        this.panelService.setContainer(this);
        const parent = this.elemRef.nativeElement.parentNode;
        if (isPlatformBrowser(this.platformId)) {
            const displayStyle = getComputedStyle(parent).getPropertyValue('display');
            if (displayStyle === 'inline') {
                this.renderer.setStyle(parent, 'display', 'inline-block');
            }
        }
        this.renderer.setStyle(parent, 'overflow', 'hidden');
        this.renderer.setStyle(parent, 'position', 'relative');
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
