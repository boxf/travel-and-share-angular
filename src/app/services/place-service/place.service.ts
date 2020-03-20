import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import {Place} from '../../place';
import {HttpClient} from '@angular/common/http';
import {PlaceImpl} from '../../place-impl';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private baseUrl = 'http://localhost:8080/api/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getPlaces(): Place[] {
    return PLACES;
  }
  public createPlace(placeImpl: PlaceImpl) {
   /* let placedb = JSON.stringify(placeImpl);*/
    return this.http.post<PlaceImpl>(this.baseUrl + 'places', placeImpl) ;
  }
}
