import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCarrousselComponent } from './photo-carroussel.component';

describe('PhotoCarrousselComponent', () => {
  let component: PhotoCarrousselComponent;
  let fixture: ComponentFixture<PhotoCarrousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCarrousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
