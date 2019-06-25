import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHoxroComponent } from './why-hoxro.component';

describe('WhyHoxroComponent', () => {
  let component: WhyHoxroComponent;
  let fixture: ComponentFixture<WhyHoxroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyHoxroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyHoxroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
