import { Injectable } from '@angular/core';
import { PLACES } from '../../some-places';
import { Place } from '../../place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private getPlaceByCountyUrl = 'http://localhost:8080/api/place/';
  selectedCounty = 'ALPESMARITIMES_06';

  constructor(private http: HttpClient) { }

  getPlacesByCounty(): Observable<Place[]> {
    return this.http.get<Place[]>(this.getPlaceByCountyUrl + this.selectedCounty);
  }

  selectCounty(county: string) {
    this.selectedCounty = county;
  }

  getListOfCounties(): string[] {
    const counties = ['AIN_01', 'AINE_02', 'ALLIER_03', 'ALPESDEHAUTEPROVENCE_04', 'HAUTESALPES_05', 'ALPESMARITIMES_06', 'ARDÈCHE_07'];
    return counties;
  }

  getListOfTypes(): string[] {
    const types = ['BEACH', 'FOREST', 'LOWMOUNTAIN', 'MEDIUMMOUNTAIN', 'HIGHMOUNTAIN', 'MUSEUM', 'ARTGALLERY', 'LAKE'];
    return types;
  }

  getPlacesTest(): Place[] {
    return PLACES;
  }

  /*private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }*/
}
