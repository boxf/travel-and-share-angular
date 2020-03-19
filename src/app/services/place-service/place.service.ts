import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import {Place} from '../../place';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }

  getPlacesByCounty(): Place[] {
    return PLACES;
  }

  getListOfCounties(): string[] {
    const counties = ['Mountain', 'Beach', 'Diving', 'Climbing'];
    return counties;
  }

  getPlaceById(id: number): Observable<Place> {
    return of(PLACES.find(place => place.id === id));
  }
}
