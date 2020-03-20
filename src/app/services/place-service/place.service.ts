import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import {Place} from '../../place';
import {HttpClient} from '@angular/common/http';
import {PlaceImpl} from '../../place-impl';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private baseUrl = 'http://localhost:8080/api/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getPlacesByCounty(): Place[] {
    return PLACES;
  }
  public createPlace(placeImpl: PlaceImpl) {
   /* let placedb = JSON.stringify(placeImpl);*/
    return this.http.post<PlaceImpl>(this.baseUrl + 'places', placeImpl) ;
  }

  getPlaceById(id: number): Observable<Place> {
    return of(PLACES.find(place => place.id === id));
  }
}
