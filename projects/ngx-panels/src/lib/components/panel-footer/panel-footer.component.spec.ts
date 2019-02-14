import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PanelFooterComponent } from './panel-footer.component';



@Component({
    selector: 'ngx-panel-footer-host',
    template: `<ngx-panel-footer [autoPadding]="autoPadding">
        <div class="transcluded"></div>
    </ngx-panel-footer>`
})
class HostComponent {
    autoPadding = true;
}

describe('PanelFooterComponent', () => {
    let hostComponent: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HostComponent, PanelFooterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        hostComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('HTML', () => {
        const mainSelector = '.ngx-panel-footer__main';
        const autoPaddingClass = 'ngx-panel-footer__main--auto-padding';

        it('should add ngx-panel-footer__main--auto-padding if autoPadding input is true', () => {
            hostComponent.autoPadding = true;
            fixture.detectChanges();
            const panel = fixture.debugElement.query(By.css(mainSelector));
            expect(panel.nativeElement.classList.contains(autoPaddingClass)).toBe(true);
        });

        it('should not add ngx-panel-footer__main--auto-padding if autoPadding input is false', () => {
            hostComponent.autoPadding = false;
            fixture.detectChanges();
            const panel = fixture.debugElement.query(By.css(mainSelector));
            expect(panel.nativeElement.classList.contains(autoPaddingClass)).toBe(false);
        });

        it('should transclude inside content', () => {
            fixture.detectChanges();
            const panel = fixture.debugElement.query(By.css(mainSelector));
            expect(panel.children[0].nativeElement.classList.contains('transcluded')).toBe(true);
        });
    });
});
