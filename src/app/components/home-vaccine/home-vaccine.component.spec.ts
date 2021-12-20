import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVaccineComponent } from './home-vaccine.component';

describe('HomeVaccineComponent', () => {
  let component: HomeVaccineComponent;
  let fixture: ComponentFixture<HomeVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
