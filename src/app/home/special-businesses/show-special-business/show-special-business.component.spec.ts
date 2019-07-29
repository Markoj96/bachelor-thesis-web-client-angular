import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpecialBusinessComponent } from './show-special-business.component';

describe('ShowSpecialBusinessComponent', () => {
  let component: ShowSpecialBusinessComponent;
  let fixture: ComponentFixture<ShowSpecialBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSpecialBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpecialBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
