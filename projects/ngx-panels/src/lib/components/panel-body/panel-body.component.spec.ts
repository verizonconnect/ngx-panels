// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { SidePanelBodyComponent } from './panel-body.component';

@Component({
    selector: 'ngx-panel-body-host',
    template: `<ngx-panel-body [autoPadding]="autoPadding">
        <div class="transcluded"></div>
    </ngx-panel-body>`
})
class HostComponent {
    autoPadding = true;
}

describe('SidePanelBodyComponent', () => {
    let hostComponent: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HostComponent, SidePanelBodyComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        hostComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('HTML', () => {
        const bodySelector = '.ngx-panel-body__content';
        const autoPaddingClass = 'ngx-panel-body__content--auto-padding';

        it('should add ngx-panel-body__content--auto-padding if autoPadding input is true', () => {
            hostComponent.autoPadding = true;
            fixture.detectChanges();
            const panel = fixture.debugElement.query(By.css(bodySelector));
            expect(panel.nativeElement.classList.contains(autoPaddingClass)).toBe(true);
        });

        it('should not add ngx-panel-body__content--auto-padding if autoPadding input is false', () => {
            hostComponent.autoPadding = false;
            fixture.detectChanges();
            const panel = fixture.debugElement.query(By.css(bodySelector));
            expect(panel.nativeElement.classList.contains(autoPaddingClass)).toBe(false);
        });

        it('should transclude inside content', () => {
            fixture.detectChanges();
            const panel = fixture.debugElement.query(By.css(bodySelector));
            expect(panel.children[0].nativeElement.classList.contains('transcluded')).toBe(true);
        });
    });
});
