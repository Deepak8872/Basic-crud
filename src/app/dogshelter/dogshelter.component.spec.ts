import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogshelterComponent } from './dogshelter.component';

describe('DogshelterComponent', () => {
  let component: DogshelterComponent;
  let fixture: ComponentFixture<DogshelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogshelterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogshelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
