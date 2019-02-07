// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PanelHeaderComponent } from './panel-header.component';
import { PanelRef } from '../../classes/panel-ref.class';
import { of } from 'rxjs';
import { PanelRefFake } from 'projects/ngx-panels/src/fakes';

@Component({
    selector: 'ngx-panel-header-host',
    template: `<ngx-panel-header [autoPadding]="autoPadding">
        <div class="transcluded"></div>
    </ngx-panel-header>`
})
class HostComponent {
    autoPadding = true;
}

describe('PanelHeaderComponent', () => {
    let hostComponent: HostComponent;
    let component: PanelHeaderComponent;
    let fixture: ComponentFixture<HostComponent>;
    let panelRef: PanelRef<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HostComponent, PanelHeaderComponent],
            providers: [{ provide: PanelRef, useClass: PanelRefFake }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        hostComponent = fixture.componentInstance;
        component = fixture.debugElement.query(By.directive(PanelHeaderComponent)).componentInstance;
        panelRef = TestBed.get(PanelRef);
    });

    describe('ngOnInit', () => {
        it('should set closeEnabled$ equal ot the one provided by PanelRef', () => {
            fixture.detectChanges();
            expect(component.closeEnabled$).toBe(panelRef.closeEnabled$);
        });
    });

    describe('onCloseClick', () => {
        it('should call close on PanelRef', () => {
            component.onCloseClick();
            expect(panelRef.close).toHaveBeenCalled();
        });
    });

    describe('HTML', () => {
        const mainSelector = '.ngx-panel-header__main';
        const contentSelector = '.ngx-panel-header__content';
        const closeBtnSelector = '.ngx-panel-header__close';
        const autoPaddingClass = 'ngx-panel-header__main--auto-padding';
        const disabledClass = 'ngx-panel-header__close--disabled';

        it('should add ngx-panel-header__main--auto-padding if autoPadding input is true', () => {
            hostComponent.autoPadding = true;
            fixture.detectChanges();
            const main = fixture.debugElement.query(By.css(mainSelector));
            expect(main.nativeElement.classList.contains(autoPaddingClass)).toBe(true);
        });

        it('should not add ngx-panel-header__main--auto-padding if autoPadding input is false', () => {
            hostComponent.autoPadding = false;
            fixture.detectChanges();
            const main = fixture.debugElement.query(By.css(mainSelector));
            expect(main.nativeElement.classList.contains(autoPaddingClass)).toBe(false);
        });

        it('should add ngx-panel-header__close--disabled if closeEnabled$ emits false', () => {
            fixture.detectChanges();
            component.closeEnabled$ = of(false);
            fixture.detectChanges();
            const closeBtn = fixture.debugElement.query(By.css(closeBtnSelector));
            expect(closeBtn.nativeElement.classList.contains(disabledClass)).toBe(true);
        });

        it('should not add ngx-panel-header__close--disabled if closeEnabled$ emits true', () => {
            fixture.detectChanges();
            component.closeEnabled$ = of(true);
            fixture.detectChanges();
            const closeBtn = fixture.debugElement.query(By.css(closeBtnSelector));
            expect(closeBtn.nativeElement.classList.contains(disabledClass)).toBe(false);
        });

        it('should transclude inside content', () => {
            fixture.detectChanges();
            const panel = fixture.debugElement.query(By.css(contentSelector));
            expect(panel.children[0].nativeElement.classList.contains('transcluded')).toBe(true);
        });

        it('should call onCloseClick when close button is clicked', () => {
            const onCloseClickSpy: jasmine.Spy = spyOn(component, 'onCloseClick');
            fixture.detectChanges();
            const closeBtn = fixture.debugElement.query(By.css(closeBtnSelector));
            closeBtn.nativeElement.dispatchEvent(new Event('click'));
            expect(onCloseClickSpy).toHaveBeenCalled();
        });
    });
});
