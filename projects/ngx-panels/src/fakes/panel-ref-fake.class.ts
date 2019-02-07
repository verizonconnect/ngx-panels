// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { ComponentRef } from '@angular/core';

import { Observable } from 'rxjs';
import { IPanelRef } from '../lib';

export class PanelRefFake<Data> implements IPanelRef<Data> {
    readonly closeEnabled$: Observable<boolean>;
    data: Data;
    readonly panelComponentRef: ComponentRef<any>;

    onBeforeClose: jasmine.Spy = jasmine.createSpy('onBeforeClose');
    setComponents: jasmine.Spy = jasmine.createSpy('setDsetComponentsata');
    enableClose: jasmine.Spy = jasmine.createSpy('enableClose');
    close: jasmine.Spy = jasmine.createSpy('close');
    setData: jasmine.Spy = jasmine.createSpy('setData');

    modifyData(data: Data) {
        this.data = data;
    }
}
