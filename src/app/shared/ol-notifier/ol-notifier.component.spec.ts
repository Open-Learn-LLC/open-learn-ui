import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlNotifierComponent } from './ol-notifier.component';

describe('OlNotifierComponent', () => {
  let component: OlNotifierComponent;
  let fixture: ComponentFixture<OlNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
