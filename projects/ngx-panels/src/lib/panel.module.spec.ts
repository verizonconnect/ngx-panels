// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { PanelModule } from './panel.module';

describe('PanelModule', () => {
    let panelModule: PanelModule;

    beforeEach(() => {
        panelModule = new PanelModule();
    });

    it('should create an instance', () => {
        expect(panelModule).toBeTruthy();
    });
});
