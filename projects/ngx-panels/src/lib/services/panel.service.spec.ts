// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { TestBed } from '@angular/core/testing';

import { PanelService } from './panel.service';
import { PanelStatusService } from './panel-status.service';
import { SidePanelStatusFakeService, SidePanelFakeComponent } from '../../../../test/fakes';
import { PanelContainerComponent } from '../components/panel-container/panel-container.component';
import { Component, NgModule } from '@angular/core';
import { PanelRef } from '../classes/panel-ref.class';

@Component({
    template: '<div><div>'
})
class ContentFakeComponent {}

@NgModule({
    declarations: [ContentFakeComponent, SidePanelFakeComponent],
    entryComponents: [ContentFakeComponent, SidePanelFakeComponent]
})
class TestModule {}

describe('SidePanelService', () => {
    let service: PanelService;
    let sidePanelStatusService: SidePanelStatusFakeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PanelService, { provide: PanelStatusService, useClass: SidePanelStatusFakeService }],
            imports: [TestModule]
        });

        service = TestBed.get(PanelService);
        sidePanelStatusService = TestBed.get(PanelStatusService);
    });

    describe('setContainer', () => {
        it('should set internal container', () => {
            const container = {} as PanelContainerComponent;
            service.setContainer(container);
            expect(service['panelContainer']).toBe(container);
        });
    });

    describe('closeAll', () => {
        it('should call reset method of SidePanelStatusService', () => {
            service.setContainer({ destroyAll: () => {} } as PanelContainerComponent);
            service.closeAll();
            expect(sidePanelStatusService.reset).toHaveBeenCalled();
        });

        it('should call destroyAll method of container', () => {
            const container = { destroyAll: () => {} } as PanelContainerComponent;
            const destroyAllSpy: jasmine.Spy = spyOn(container, 'destroyAll');
            service.setContainer(container);
            service.closeAll();
            expect(destroyAllSpy).toHaveBeenCalled();
        });
    });

    describe('open', () => {
        const panelRef: PanelRef<any> = {} as PanelRef<any>;
        let appendPanelSpy: jasmine.Spy;
        beforeEach(() => {
            service.setContainer({} as PanelContainerComponent);
            appendPanelSpy = spyOn<any>(service, 'appendPanel').and.returnValue(panelRef);
        });

        it('should call increment method of SidePanelStatusService', () => {
            service.open(ContentFakeComponent);
            expect(sidePanelStatusService.increment).toHaveBeenCalled();
        });

        it('should call appendPanel method', () => {
            service.open(ContentFakeComponent);
            expect(appendPanelSpy).toHaveBeenCalled();
        });

        it('should return panelRef created by appendPanel', () => {
            expect(service.open(ContentFakeComponent)).toBe(panelRef);
        });

        it('should call notifyOpen method of SidePanelStatusService if no panel is open', () => {
            sidePanelStatusService.setIsOpen(false);
            service.open(ContentFakeComponent);
            expect(sidePanelStatusService.notifyOpen).toHaveBeenCalled();
        });

        it('should not call notifyOpen method of SidePanelStatusService if a panel is already open', () => {
            sidePanelStatusService.setIsOpen(true);
            service.open(ContentFakeComponent);
            expect(sidePanelStatusService.notifyOpen).not.toHaveBeenCalled();
        });
    });

    describe('openAsRoot', () => {
        let appendPanelSpy: jasmine.Spy;
        const panelRef: PanelRef<any> = {} as PanelRef<any>;
        beforeEach(() => {
            service.setContainer({ destroyAll: () => {} } as PanelContainerComponent);
            appendPanelSpy = spyOn<any>(service, 'appendPanel').and.returnValue(panelRef);
        });

        it('should call closeAll method', () => {
            const closeAllSpy: jasmine.Spy = spyOn(service, 'closeAll');
            service.openAsRoot(ContentFakeComponent);
            expect(closeAllSpy).toHaveBeenCalled();
        });

        it('should call reset method before increment method of SidePanelStatusService', () => {
            service.openAsRoot(ContentFakeComponent);
            expect(sidePanelStatusService.reset).toHaveBeenCalledBefore(sidePanelStatusService.increment);
        });

        it('should call appendPanel method', () => {
            service.openAsRoot(ContentFakeComponent);
            expect(appendPanelSpy).toHaveBeenCalled();
        });

        it('should return panelRef created by appendPanel', () => {
            expect(service.openAsRoot(ContentFakeComponent)).toBe(panelRef);
        });

        it('should call notifyOpen method of SidePanelStatusService', () => {
            service.openAsRoot(ContentFakeComponent);
            expect(sidePanelStatusService.notifyOpen).toHaveBeenCalled();
        });
    });

    describe('appendPanel', () => {
        let container: PanelContainerComponent;

        beforeEach(() => {
            container = {
                addTopPanel: jasmine.createSpy('addTopPanel'),
                destroyTopPanel: jasmine.createSpy('destroyTopPanel')
            } as any;
            service.setContainer(container);
        });

        it('should return panelRef populated with data', () => {
            const panelRef: PanelRef<number> = service['appendPanel'](SidePanelFakeComponent, ContentFakeComponent, 41);
            expect(panelRef.data).toBe(41);
        });

        it('should return panelRef with proper container', () => {
            const panelRef: PanelRef<number> = service['appendPanel'](SidePanelFakeComponent, ContentFakeComponent, 41);
            expect(panelRef['panelContainer']).toBe(container);
        });

        it('should insert content in its container', () => {
            const panelRef: PanelRef<number> = service['appendPanel'](SidePanelFakeComponent, ContentFakeComponent, 41);
            expect(panelRef.panelComponentRef.instance.contentContainer.insert).toHaveBeenCalled();
        });

        it('should call destroyTopPanel method if panelCloseAnimationEnd of panel emits', () => {
            const panelRef: PanelRef<number> = service['appendPanel'](SidePanelFakeComponent, ContentFakeComponent, 41);
            panelRef.panelComponentRef.instance.panelCloseAnimationEnd.emit();
            expect(container.destroyTopPanel).toHaveBeenCalled();
        });
    });
});
