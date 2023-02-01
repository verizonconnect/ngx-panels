import { AnimationEvent } from '@angular/animations';
import { EventEmitter, ViewContainerRef } from '@angular/core';



export interface IPanelComponent {
    contentContainer: ViewContainerRef;
    panelOpenAnimationEnd: EventEmitter<boolean>;
    panelCloseAnimationEnd: EventEmitter<boolean>;
    onAnimationEvent(evt: AnimationEvent);

    startCloseAnimation();
}
