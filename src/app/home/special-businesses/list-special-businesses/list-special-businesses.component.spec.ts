import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpecialBusinessesComponent } from './list-special-businesses.component';

describe('ListSpecialBusinessesComponent', () => {
  let component: ListSpecialBusinessesComponent;
  let fixture: ComponentFixture<ListSpecialBusinessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSpecialBusinessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpecialBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
