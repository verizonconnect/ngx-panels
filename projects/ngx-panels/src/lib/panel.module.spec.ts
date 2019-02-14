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
