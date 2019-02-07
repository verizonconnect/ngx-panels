// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.
import { Component, EventEmitter } from '@angular/core';
import { IPanelComponent } from '../lib/components/panel/panel.interface';

@Component({
    selector: 'ngx-panel',
    template: '<div></div>'
})
export class PanelFakeComponent implements IPanelComponent {
    contentContainer: any = {
        insert: jasmine.createSpy('insert')
    };
    panelCloseAnimationEnd: EventEmitter<boolean> = new EventEmitter<boolean>();
    startCloseAnimation: jasmine.Spy = jasmine.createSpy('startCloseAnimation');
    onAnimationEvent: jasmine.Spy = jasmine.createSpy('onAnimationEvent');
}
