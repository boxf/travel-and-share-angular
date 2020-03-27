import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAddPlaceComponent } from './map-add-place.component';

describe('MapAddPlaceComponent', () => {
  let component: MapAddPlaceComponent;
  let fixture: ComponentFixture<MapAddPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAddPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAddPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
