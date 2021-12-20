import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVcComponent } from './home-vc.component';

describe('HomeVcComponent', () => {
  let component: HomeVcComponent;
  let fixture: ComponentFixture<HomeVcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
