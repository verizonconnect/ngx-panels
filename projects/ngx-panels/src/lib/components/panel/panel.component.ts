import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Output,
    ViewChild,
    ViewContainerRef,
    Inject,
    OnInit
} from '@angular/core';

import { IPanelComponent } from './panel.interface';
import { PanelConfig } from '../../classes/config.class';
import { NGX_PANELS_CONFIG } from '../../services/panel-status.service';



const SLIDE_DURATION = 200;

export const OPEN_LEFT = 'open-left';
export const OPEN_RIGHT = 'open-right';
export const OPEN_TOP = 'open-top';
export const OPEN_BOTTOM = 'open-bottom';
export const OPEN_FLOATING = 'open-floating';
export const CLOSED_LEFT = 'closed-left';
export const CLOSED_RIGHT = 'closed-right';
export const CLOSED_TOP = 'closed-top';
export const CLOSED_BOTTOM = 'closed-bottom';
export const CLOSED_FLOATING = 'closed-floating';


const ANIMATION_RIGHT_HIDDEN = {
    transform: 'translateX(100%)'
};
const ANIMATION_RIGHT_VISIBLE = {
    transform: 'translateX(0)'
};

const ANIMATION_LEFT_HIDDEN = {
    transform: 'translateX(-100%)'
};
const ANIMATION_LEFT_VISIBLE = {
    transform: 'translateX(0)'
};

const ANIMATION_TOP_HIDDEN = {
    transform: 'translateY(-100%)'
};
const ANIMATION_TOP_VISIBLE = {
    transform: 'translateY(0)'
};

const ANIMATION_BOTTOM_HIDDEN = {
    transform: 'translateY(100%)'
};
const ANIMATION_BOTTOM_VISIBLE = {
    transform: 'translateY(0)'
};

const ANIMATION_FLOATING_HIDDEN = {
    transform: 'scale(0)'
};
const ANIMATION_FLOATING_VISIBLE = {
    transform: 'scale(1)'
};


@Component({
    selector: 'ngx-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('panelState', [
            state(CLOSED_RIGHT, style(ANIMATION_RIGHT_HIDDEN)),
            state(CLOSED_LEFT, style(ANIMATION_LEFT_HIDDEN)),
            state(CLOSED_TOP, style(ANIMATION_TOP_HIDDEN)),
            state(CLOSED_BOTTOM, style(ANIMATION_BOTTOM_HIDDEN)),
            state(CLOSED_FLOATING, style(ANIMATION_FLOATING_HIDDEN)),
            state(OPEN_RIGHT, style(ANIMATION_RIGHT_VISIBLE)),
            state(OPEN_LEFT, style(ANIMATION_LEFT_VISIBLE)),
            state(OPEN_TOP, style(ANIMATION_TOP_VISIBLE)),
            state(OPEN_BOTTOM, style(ANIMATION_BOTTOM_VISIBLE)),
            state(OPEN_FLOATING, style(ANIMATION_FLOATING_VISIBLE)),
            transition(`${OPEN_RIGHT} => ${CLOSED_RIGHT}`, animate(SLIDE_DURATION)),
            transition(`${OPEN_LEFT} => ${CLOSED_LEFT}`, animate(SLIDE_DURATION)),
            transition(`${OPEN_TOP} => ${CLOSED_TOP}`, animate(SLIDE_DURATION)),
            transition(`${OPEN_BOTTOM} => ${CLOSED_BOTTOM}`, animate(SLIDE_DURATION)),
            transition(`${OPEN_FLOATING} => ${CLOSED_FLOATING}`, animate(SLIDE_DURATION)),
            transition(`void => ${OPEN_RIGHT}`, [style(ANIMATION_RIGHT_HIDDEN), animate(SLIDE_DURATION, style(ANIMATION_RIGHT_VISIBLE))]),
            transition(`void => ${OPEN_LEFT}`, [style(ANIMATION_LEFT_HIDDEN), animate(SLIDE_DURATION, style(ANIMATION_LEFT_VISIBLE))]),
            transition(`void => ${OPEN_TOP}`, [style(ANIMATION_TOP_HIDDEN), animate(SLIDE_DURATION, style(ANIMATION_TOP_VISIBLE))]),
            // tslint:disable-next-line:max-line-length
            transition(`void => ${OPEN_BOTTOM}`, [style(ANIMATION_BOTTOM_HIDDEN), animate(SLIDE_DURATION, style(ANIMATION_BOTTOM_VISIBLE))]),
            // tslint:disable-next-line:max-line-length
            transition(`void => ${OPEN_FLOATING}`, [style(ANIMATION_FLOATING_HIDDEN), animate(SLIDE_DURATION, style(ANIMATION_FLOATING_VISIBLE))])
        ])
    ]
})
export class PanelComponent implements IPanelComponent, OnInit {
    @Output()
    panelCloseAnimationEnd: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
    contentContainer: ViewContainerRef;

    panelState;

    constructor(
        private readonly ref: ChangeDetectorRef,
        @Inject(NGX_PANELS_CONFIG) private readonly config: PanelConfig
    ) {}

    ngOnInit() {
        this.panelState =  this.openState();
    }

    onAnimationEvent(evt: AnimationEvent) {
        if (evt.fromState !== 'void' && this.isClosed(evt.toState)) {
            this.panelCloseAnimationEnd.emit(true);
        }
    }

    private isClosed(evtState: string): boolean {
        return evtState === CLOSED_RIGHT
            || evtState === CLOSED_LEFT
            || evtState === CLOSED_TOP
            || evtState === CLOSED_BOTTOM
            || evtState === CLOSED_FLOATING;
    }

    private closeState(): string {
        return `closed-${this.config.side}`;
    }

    private openState(): string {
        return `open-${this.config.side}`;
    }

    startCloseAnimation() {
        this.panelState = this.closeState();
        this.ref.markForCheck();
    }

    get panelWidth() {
        return this.isVertical ?
            this.config.size + 'px' :
            '100%';
    }

    get panelHeight() {
        return this.isHorizontal ?
            this.config.size + 'px' :
            '100%';
    }

    get isVertical() {
        return this.isLeft || this.isRight;
    }

    get isHorizontal() {
        return this.isTop || this.isBottom;
    }

    get isRight() {
        return !this.isLeft && !this.isBottom && !this.isTop && !this.isFloating;
    }

    get isLeft() {
        return this.config.side && this.config.side.toLowerCase() === 'left';
    }

    get isTop() {
        return this.config.side && this.config.side.toLowerCase() === 'top';
    }

    get isBottom() {
        return this.config.side && this.config.side.toLowerCase() === 'bottom';
    }

    get isFloating() {
        return this.config.side && this.config.side.toLowerCase() === 'floating';
    }
}
