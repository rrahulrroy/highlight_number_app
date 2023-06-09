import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightDemoComponent } from './highlight-demo.component';

describe('HighlightDemoComponent', () => {
  let component: HighlightDemoComponent;
  let fixture: ComponentFixture<HighlightDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDemoComponent]
    });
    fixture = TestBed.createComponent(HighlightDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
