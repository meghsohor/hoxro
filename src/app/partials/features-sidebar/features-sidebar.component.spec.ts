import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSidebarComponent } from './features-sidebar.component';

describe('FeaturesSidebarComponent', () => {
  let component: FeaturesSidebarComponent;
  let fixture: ComponentFixture<FeaturesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
