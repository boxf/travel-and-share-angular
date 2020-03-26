import {Component, Input, OnInit} from '@angular/core';
import { PlaceService } from '../../services/place-service/place.service';
import { Place } from '../../place';
import {forkJoin, Observable, of, Subscription, zip} from 'rxjs';
import {filter, flatMap, map, mergeMap} from 'rxjs/operators';
import {combineLatest} from 'rxjs';

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
    const listOfPlacesObservable = combineLatest([selectedCounty$, selectedType$])
      .pipe(
        flatMap(([selectedCounty, selectedType]) => {
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
      );

    this.countySubscription = listOfPlacesObservable.subscribe(places => {
        console.log('\'im in the subscription of places. Places [] length is : ' + places.length);
        this.places = places;
      },
      error => console.log(error),
      () => console.log('completed'),
    );

  }
}
