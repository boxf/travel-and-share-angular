import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import {Place} from '../../place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }

  getPlacesByCounty(): Place[] {
    return PLACES;
  }
  getPlaceByFind(id) {
    return PLACES.find(x => x.id === 2);
  }

  getListOfCounties(): string[] {
    const counties = ['Mountain', 'Beach', 'Diving', 'Climbing'];
    return counties;
  }
}
