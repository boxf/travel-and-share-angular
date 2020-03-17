import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place-service/place.service';
import {Place} from '../../place';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {

  places: Place[] = this.placeService.getPlaces();
  types: string[] = this.getListOfTypes();

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.getPlacesList();
  }

  getPlacesList(): Place[] {
    return this.placeService.getPlaces();
  }

  getListOfTypes(): string[] {
    const listOfTypes: string[] = [this.places[0].type];
    for (const p of this.places) {
      listOfTypes.push(p.type);
    }
    const distinctTypes = [...new Set(listOfTypes)];
    return distinctTypes;
  }
}
