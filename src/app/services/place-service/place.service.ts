import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import { Place } from '../../place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, Subject, Subscription} from 'rxjs';
import {PlaceImpl} from '../../place-impl';
import {CountyEnum} from '../../CountyEnum';
import {TypeEnum} from '../../TypeEnum';


// @ts-ignore
@Injectable({
  providedIn: 'root'

})
export class PlaceService {

  private placesRESTUrl = 'http://localhost:8080/api/';
  private baseUrlPicture = 'http://localhost:8080/image/';
  private subject = new Subject<any>();
  private subjectPlace = new Subject<any>();

  constructor(private http: HttpClient) { }


  getPlacesByCounty(selectedCounty: string): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesRESTUrl + 'places/' + selectedCounty);
  }

  getPlacesFiltered(): Observable<Place[]> {
    return this.subjectPlace.asObservable();
  }

  sendPlacesFiltered(places: Place[]) {
    this.subjectPlace.next(places);
  }

  getSelectedCounty(): Observable<string> {
    return this.subject.asObservable();
  }

  public createPlace(placeForm: FormData) {
    return this.http.post<PlaceImpl>(this.placesRESTUrl + 'place', placeForm).subscribe(value => {
      console.log(value);
    });
  }

  public uploadPicture(pictureForm: FormData) {
    return this.http.post(this.baseUrlPicture + 'upload', pictureForm, {observe: 'response'}).subscribe((response) => {
        if (response.status === 200) {
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
    );
  }

  sendSelectedCounty(selectedCounty: string) {
    this.subject.next(selectedCounty);
  }

  getPlaceById(id: number): Observable<Place> {
    return this.http.get<Place>(this.placesRESTUrl + 'place/' + id);
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
