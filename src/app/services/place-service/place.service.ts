import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import {Place} from '../../place';
import {HttpClient} from '@angular/common/http';
import {PlaceImpl} from '../../place-impl';
import {Observable, of} from 'rxjs';


// @ts-ignore
@Injectable({
  providedIn: 'root'

})
export class PlaceService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getPlacesByCounty(): Place[] {
    return PLACES;
  }
  public createPlace(placeImpl: PlaceImpl) {
    return this.http.post<PlaceImpl>(this.baseUrl + 'places', placeImpl) ;
  }

  getPlaceById(id: number): Observable<Place> {
    return of(PLACES.find(place => place.id === id));
  }
}
