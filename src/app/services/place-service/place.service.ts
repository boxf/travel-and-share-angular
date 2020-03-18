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
}
