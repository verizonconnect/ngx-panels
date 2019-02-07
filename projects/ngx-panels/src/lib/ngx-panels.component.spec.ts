import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPanelsComponent } from './ngx-panels.component';

describe('NgxPanelsComponent', () => {
  let component: NgxPanelsComponent;
  let fixture: ComponentFixture<NgxPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
