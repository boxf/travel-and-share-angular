import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import { Place } from '../../place';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlacesByCounty() {
    const getPlaceByCountyUrl = 'http://localhost:8080/api/places';
    return this.http.get<Place[]>(getPlaceByCountyUrl);
  }

  getListOfCounties(): string[] {
    const counties = ['Mountain', 'Beach', 'Diving', 'Climbing'];
    return counties;
  }
}
