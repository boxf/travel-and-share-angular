import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import { Place } from '../../place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, Subject, Subscription} from 'rxjs';
import {PlaceImpl} from '../../place-impl';
import {CountyEnum} from '../../CountyEnum';
import {TypeEnum} from '../../TypeEnum';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private placesRESTUrl = 'http://localhost:8080/api/';
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }


  getPlacesByCounty(selectedCounty: string): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesRESTUrl + 'place/' + selectedCounty);
  }

  getSelectedCounty(): Observable<string> {
    return this.subject.asObservable();
  }

  sendSelectedCounty(selectedCounty: string) {
    this.subject.next(selectedCounty);
  }

  createPlace(placeImpl: PlaceImpl) {
    return this.http.post<PlaceImpl>(this.placesRESTUrl + 'place', placeImpl) ;
  }

  getPlaceById(id: number): Observable<Place> {
    return of(PLACES.find(place => place.id === id));
  }

  getCountiesValues(): string[] {
    const county = Object.keys(CountyEnum).filter(k => typeof CountyEnum[k as any] === 'number');
    return county;
  }

  getTypesValues(): string[] {
    const types = Object.keys(TypeEnum).filter(k => typeof TypeEnum[k as any] === 'number');
    return types;
  }

  getCountiesKeys(): string[] {
    const county = Object.keys(CountyEnum).filter(k => typeof CountyEnum[k as any] === 'string');
    return county;
  }

  getTypesKeys(): string[] {
    const types = Object.keys(TypeEnum).filter(k => typeof TypeEnum[k as any] === 'string');
    return types;
  }
}
