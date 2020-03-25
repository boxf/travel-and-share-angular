import {Component, Input, OnInit} from '@angular/core';
import { PlaceService } from '../../services/place-service/place.service';
import { Place } from '../../place';
import {forkJoin, Observable, Subscription} from 'rxjs';
import {combineLatest, filter, flatMap, map, mergeMap} from 'rxjs/operators';
import {strict} from 'assert';

@Component({
  selector: 'app-list-of-places',
  templateUrl: './list-of-places.component.html',
  styleUrls: ['./list-of-places.component.css']
})
export class ListOfPlacesComponent implements OnInit {

  places: Place[] = [];
  @Input() place;
  countySubscription: Subscription;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    const selectedCounty$ = this.placeService.getSelectedCounty();
    const selectedType$ = this.placeService.getSelectedType();
    const selectedGrade$ = this.placeService.getSelectedGrade();

    this.countySubscription = forkJoin([selectedCounty$, selectedType$, selectedGrade$])
      .pipe(
        flatMap(([selectedType, selectedCounty, selectedGrade]) => {
            console.log('\'im in the flatMap, selectedCounty is :' + selectedCounty + 'selectedType is : ' + selectedType);
            return this.placeService.getPlacesByCounty(selectedCounty)
              .pipe(
                map(places => {
                  return places.filter(p => {
                    console.log('\'im in the filter of places by type. SelectedType is : ' + selectedType);
                    return p.type === selectedType;
                  });
                })
              );
          }
        )
      ).subscribe(places => {
          console.log('\'im in the subscription of places. Places [] length is : ' + places.length);
          this.places = places;
        },
        error => console.log(error));
  }


  /*this.countySubscription = this.placeService
      .getSelectedCounty()
      .pipe(
        flatMap(selectedCounty => {
          return this.placeService.getPlacesByCounty(selectedCounty);
        }),
        map(places => {
          return places.filter(p => p.type === 'BEACH');
        })
      )
      .subscribe(places => {
          this.places = places;
        },
        error => console.log(error));*/
}
