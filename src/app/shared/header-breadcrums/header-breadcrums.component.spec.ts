import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBreadcrumsComponent } from './header-breadcrums.component';

describe('HeaderBreadcrumsComponent', () => {
  let component: HeaderBreadcrumsComponent;
  let fixture: ComponentFixture<HeaderBreadcrumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBreadcrumsComponent]
    });
    fixture = TestBed.createComponent(HeaderBreadcrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
