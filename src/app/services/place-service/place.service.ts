import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import {Place} from '../../place';
import {HttpClient} from '@angular/common/http';
import {PlaceImpl} from '../../place-impl';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private baseUrl = 'http://localhost:8080/api/';
  private baseUrlPicture = 'http://localhost:8080/image/';
  message: string;

  constructor(private http: HttpClient) {
  }

  getPlacesByCounty(): Place[] {
    return PLACES;
  }

  public createPlace(placeForm: FormData) {
    return this.http.post<PlaceImpl>(this.baseUrl + 'place', placeForm).subscribe(value => {
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

  getPlaceById(id: number): Observable<Place> {
    return of(PLACES.find(place => place.id === id));
  }
}
