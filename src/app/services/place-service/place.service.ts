import {Injectable, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { PLACES } from '../../some-places';
import { Place } from '../../place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, Subject, Subscription} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {FilterbarComponent} from '../../homepage/filterbar/filterbar.component';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private getPlaceByCountyUrl = 'http://localhost:8080/api/place/';
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }


  getPlacesByCounty(selectedCounty: string): Observable<Place[]> {
    return this.http.get<Place[]>(this.getPlaceByCountyUrl + selectedCounty);
  }

  getSelectedCounty(): Observable<string> {
    return this.subject.asObservable();
  }

  sendSelectedCounty(selectedCounty: string) {
    this.subject.next(selectedCounty);
  }

  getListOfCounties(): string[] {
    const counties = ['AIN_01', 'AISNE_02', 'ALLIER_03', 'ALPESDEHAUTEPROVENCE_04', 'HAUTESALPES_05', 'ALPESMARITIMES_06', 'ARDÈCHE_07'];
    return counties;
  }

  getListOfTypes(): string[] {
    const types = ['BEACH', 'FOREST', 'LOWMOUNTAIN', 'MEDIUMMOUNTAIN', 'HIGHMOUNTAIN', 'MUSEUM', 'ARTGALLERY', 'LAKE'];
    return types;
  }
}
