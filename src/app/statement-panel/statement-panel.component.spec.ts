import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementPanelComponent } from './statement-panel.component';

describe('StatementPanelComponent', () => {
  let component: StatementPanelComponent;
  let fixture: ComponentFixture<StatementPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
