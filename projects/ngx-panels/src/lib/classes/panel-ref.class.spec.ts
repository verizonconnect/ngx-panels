// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { PanelRef } from './panel-ref.class';
import { PanelContainerComponent } from '..';

describe('PanelRef class', () => {
    it('should create', () => {
        expect(new PanelRef()).toBeTruthy();
    });

    it('should call onBeforeClose before closing panel', () => {
        const panel = new PanelRef();
        spyOn(panel, 'onBeforeClose');

        panel.close();

        expect(panel.onBeforeClose).toHaveBeenCalled();
    });

    it('should prevent closing panel when false returned from onBeforeClose', () => {
        const panel = new PanelRef();
        const panelContainer = { startClosingAnimation: () => {} } as PanelContainerComponent;
        panel.setComponents(null, panelContainer);
        panel.onBeforeClose = () => false;
        spyOn(panelContainer, 'startClosingAnimation');

        panel.close();

        expect(panelContainer.startClosingAnimation).not.toHaveBeenCalled();
    });
});
