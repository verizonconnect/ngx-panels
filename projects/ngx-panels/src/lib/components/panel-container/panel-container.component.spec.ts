// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelContainerComponent } from './panel-container.component';
import { PanelService, IPanelService } from '../../services/panel.service';
import { PanelRef } from '../../classes/panel-ref.class';
import { PanelComponent } from '../panel/panel.component';
import { ComponentRef } from '@angular/core';
import { PanelFakeService } from 'projects/ngx-panels/src/fakes';

describe('PanelContainerComponent', () => {
    let component: PanelContainerComponent;
    let fixture: ComponentFixture<PanelContainerComponent>;
    let panelService: IPanelService;

    const createPanels = (panelComponentRefs: ComponentRef<PanelComponent>[]): PanelRef<any>[] => {
        spyOn(component.viewContainer, 'insert');
        return panelComponentRefs.map(panelComponentRef => {
            const panel = new PanelRef<any>();
            panel.setComponents(panelComponentRef, null);
            component.addTopPanel(panel);
            return panel;
        });
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PanelContainerComponent],
            providers: [{ provide: PanelService, useClass: PanelFakeService }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PanelContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        panelService = TestBed.get(PanelService);
    });

    describe('ngOnInit', () => {
        it('should set self as container in panelService', () => {
            expect(panelService.setContainer).toHaveBeenCalledWith(component);
        });
    });

    describe('destroyAll', () => {
        it('should call destroy on all panels', () => {
            const panelComponentRefs = [
                <ComponentRef<PanelComponent>>{ destroy: () => {} },
                <ComponentRef<PanelComponent>>{ destroy: () => {} }
            ];
            panelComponentRefs.forEach(panelComponentRef => {
                spyOn(panelComponentRef, 'destroy');
            });
            createPanels(panelComponentRefs);
            component.destroyAll();
            expect(panelComponentRefs[0].destroy).toHaveBeenCalled();
            expect(panelComponentRefs[1].destroy).toHaveBeenCalled();
        });
    });

    describe('destroyTopPanel', () => {
        it('should call destroy only on top panel', () => {
            const panelComponentRefs = [
                <ComponentRef<PanelComponent>>{ destroy: () => {} },
                <ComponentRef<PanelComponent>>{ destroy: () => {} }
            ];
            panelComponentRefs.forEach(panelComponentRef => {
                spyOn(panelComponentRef, 'destroy');
            });
            createPanels(panelComponentRefs);
            component.destroyTopPanel();
            expect(panelComponentRefs[0].destroy).not.toHaveBeenCalled();
            expect(panelComponentRefs[1].destroy).toHaveBeenCalled();
        });
    });

    describe('addTopPanel', () => {
        it('should insert panel in container', () => {
            const insertSpy: jasmine.Spy = spyOn(component.viewContainer, 'insert');
            const panelRef: PanelRef<any> = new PanelRef<any>();
            panelRef.setComponents(<ComponentRef<PanelComponent>>{ hostView: {} }, null);
            component.addTopPanel(panelRef);
            expect(insertSpy).toHaveBeenCalledWith(panelRef.panelComponentRef.hostView);
        });
    });

    describe('startClosingAnimation', () => {
        it('should call startCloseAnimation of top panel', () => {
            const panelComponentRefs = [
                <ComponentRef<PanelComponent>>{ instance: { startCloseAnimation: () => {} } },
                <ComponentRef<PanelComponent>>{ instance: { startCloseAnimation: () => {} } }
            ];
            createPanels(panelComponentRefs);
            panelComponentRefs.forEach(panelComponentRef => {
                spyOn(panelComponentRef.instance, 'startCloseAnimation');
            });
            component.startClosingAnimation();
            expect(panelComponentRefs[0].instance.startCloseAnimation).not.toHaveBeenCalled();
            expect(panelComponentRefs[1].instance.startCloseAnimation).toHaveBeenCalled();
        });
    });
});
