import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedDividerComponent } from './dotted-divider.component';

describe('DottedDividerComponent', () => {
  let component: DottedDividerComponent;
  let fixture: ComponentFixture<DottedDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DottedDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DottedDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
