import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place-service/place.service';
import { Place } from '../../place';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-of-places',
  templateUrl: './list-of-places.component.html',
  styleUrls: ['./list-of-places.component.css']
})
export class ListOfPlacesComponent implements OnInit {

  places: Observable<Place[]> = this.placeService.getPlacesByCounty();
  // placesSortedByType: Place[] = this.getPlacesSortedByType();
  // placesSortedByCounty: Place[] = this.placeService.getPlacesByCounty();


  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
  }

  private getPlacesSortedByType() {
    return [];
  }
}
