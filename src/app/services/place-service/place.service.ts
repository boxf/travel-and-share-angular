import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import {Place} from '../../place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlacesByCounty() {
    const getPlaceByCountyUrl = 'http://localhost:8080/api/places';
    return this.http.get<Place[]>(getPlaceByCountyUrl);
  }
  getPlaceByFind(id) {
    return PLACES.find(x => x.id === id);
  }

  getListOfCounties(): string[] {
    const counties = ['Mountain', 'Beach', 'Diving', 'Climbing'];
    return counties;
  }
}
