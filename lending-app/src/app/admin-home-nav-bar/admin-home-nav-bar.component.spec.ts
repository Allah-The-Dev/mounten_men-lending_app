import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeNavBarComponent } from './admin-home-nav-bar.component';

describe('AdminHomeNavBarComponent', () => {
  let component: AdminHomeNavBarComponent;
  let fixture: ComponentFixture<AdminHomeNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
