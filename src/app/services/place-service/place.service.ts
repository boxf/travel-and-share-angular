import {Injectable} from '@angular/core';
import {Place} from '../../place';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {PlaceImpl} from '../../place-impl';
import {CountyEnum} from '../../CountyEnum';
import {TypeEnum} from '../../TypeEnum';


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
    return this.http.post(this.baseUrlPicture + 'upload', pictureForm, {observe: 'response'})
      .subscribe((response) => {
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
    return Object.keys(CountyEnum).filter(k => typeof CountyEnum[k as any] === 'number');
  }

  getTypesValues(): string[] {
    return Object.keys(TypeEnum).filter(k => typeof TypeEnum[k as any] === 'number');
  }
}
