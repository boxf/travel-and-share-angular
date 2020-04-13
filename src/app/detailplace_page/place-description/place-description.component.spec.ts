import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDescriptionComponent } from './place-description.component';

describe('PlaceDescriptionComponent', () => {
  let component: PlaceDescriptionComponent;
  let fixture: ComponentFixture<PlaceDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
