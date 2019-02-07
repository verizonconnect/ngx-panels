// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import {
    Component,
    Output,
    EventEmitter,
    ViewContainerRef,
    ViewChild,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { ISidePanelComponent } from './panel.interface';

const SLIDE_DURATION = 200;

export const OPEN = 'open';
export const CLOSED = 'closed';
const ANIMATION_HIDDEN = {
    transform: 'translateX(100%)'
};
const ANIMATION_VISIBLE = {
    transform: 'translateX(0)'
};

@Component({
    selector: 'ngx-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('panelState', [
            state(CLOSED, style(ANIMATION_HIDDEN)),
            state(OPEN, style(ANIMATION_VISIBLE)),
            transition(`${OPEN} => ${CLOSED}`, animate(SLIDE_DURATION)),
            transition(`:enter`, [style(ANIMATION_HIDDEN), animate(SLIDE_DURATION, style(ANIMATION_VISIBLE))])
        ])
    ]
})
export class PanelComponent implements ISidePanelComponent {
    @Output()
    panelCloseAnimationEnd: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('contentContainer', { read: ViewContainerRef })
    contentContainer: ViewContainerRef;

    panelState = OPEN;

    constructor(private ref: ChangeDetectorRef) {}

    onAnimationEvent(evt: AnimationEvent) {
        if (evt.fromState !== 'void' && evt.toState === CLOSED) {
            this.panelCloseAnimationEnd.emit(true);
        }
    }

    startCloseAnimation() {
        this.panelState = CLOSED;
        this.ref.markForCheck();
    }
}
