// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { SidePanelModule } from './panel.module';

describe('SidePanelModule', () => {
    let sidePanelModule: SidePanelModule;

    beforeEach(() => {
        sidePanelModule = new SidePanelModule();
    });

    it('should create an instance', () => {
        expect(sidePanelModule).toBeTruthy();
    });
});
