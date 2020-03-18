import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import {Place} from '../../place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }
  getPlaces(): Place[] {
    return PLACES;
  }

  getPlacesByCounty(): Place[] {
    return PLACES;
  }
  getPlaceByFind(id) {
    return PLACES.find(x => x.id === id);
  }

  getListOfCounties(): string[] {
    const counties = ['Mountain', 'Beach', 'Diving', 'Climbing'];
    return counties;
  }
}
