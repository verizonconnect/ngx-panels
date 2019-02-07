// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { EventEmitter, ViewContainerRef } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

export interface ISidePanelComponent {
    contentContainer: ViewContainerRef;
    panelCloseAnimationEnd: EventEmitter<boolean>;
    onAnimationEvent(evt: AnimationEvent);

    startCloseAnimation();
}
