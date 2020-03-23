import {Component, Input, OnInit} from '@angular/core';
import { PlaceService } from '../../services/place-service/place.service';
import { Place } from '../../place';
import {Observable, Subscription} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
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
    this.countySubscription = this.placeService
      .getSelectedCounty()
      .pipe(
        flatMap(selectedCounty => {
          return this.placeService.getPlacesByCounty(selectedCounty);
        })
      )
      .subscribe(places => {
          this.places = places;
          this.placeService.sendPlacesFiltered(this.places);
        },
        error => console.log(error));

  }

}
