import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMapComponent } from './map-map.component';

describe('MapMapComponent', () => {
  let component: MapMapComponent;
  let fixture: ComponentFixture<MapMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
