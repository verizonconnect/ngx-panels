import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotPanelComponent } from './robot-panel.component';

describe('RobotPanelComponent', () => {
  let component: RobotPanelComponent;
  let fixture: ComponentFixture<RobotPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
