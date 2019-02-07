// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationEvent } from '@angular/animations';
import { By } from '@angular/platform-browser';

import { PanelComponent, CLOSED, OPEN } from './panel.component';

describe('PanelComponent', () => {
    let component: PanelComponent;
    let fixture: ComponentFixture<PanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PanelComponent],
            imports: [NoopAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should start with panelState set to OPEN', () => {
        expect(component.panelState).toBe(OPEN);
    });

    describe('startCloseAnimation', () => {
        it('should set panelState to CLOSED', () => {
            component.startCloseAnimation();
            expect(component.panelState).toBe(CLOSED);
        });
    });

    describe('onAnimationEvent', () => {
        const createEvent = (fromState: string, toState: string) => ({
            fromState,
            toState,
            totalTime: 100,
            phaseName: 'a',
            element: {},
            triggerName: 'b',
            disabled: false
        });

        it('should emit panelCloseAnimationEnd if the change is from open to closed state', () => {
            const panelCloseAnimationEndSpy: jasmine.Spy = spyOn(component.panelCloseAnimationEnd, 'emit');
            const event: AnimationEvent = createEvent(OPEN, CLOSED);
            component.onAnimationEvent(event);
            expect(panelCloseAnimationEndSpy).toHaveBeenCalled();
        });

        it('should not emit panelCloseAnimationEnd if the change is from void to closed state', () => {
            const panelCloseAnimationEndSpy: jasmine.Spy = spyOn(component.panelCloseAnimationEnd, 'emit');
            const event: AnimationEvent = createEvent('void', CLOSED);
            component.onAnimationEvent(event);
            expect(panelCloseAnimationEndSpy).not.toHaveBeenCalled();
        });

        it('should not emit panelCloseAnimationEnd if the change is from closed to open state', () => {
            const panelCloseAnimationEndSpy: jasmine.Spy = spyOn(component.panelCloseAnimationEnd, 'emit');
            const event: AnimationEvent = createEvent(CLOSED, OPEN);
            component.onAnimationEvent(event);
            expect(panelCloseAnimationEndSpy).not.toHaveBeenCalled();
        });
    });

    describe('HTML', () => {
        it('should manage animation through panelState context', () => {
            const panel = fixture.debugElement.query(By.css('.ngx-panel__main'));
            expect(panel.nativeElement.classList).toContain('ng-trigger-panelState');
        });
    });
});
