import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place-service/place.service';
import {Place} from '../../place';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {

  places: Place[] = this.placeService.getPlacesByCounty();
  counties: string[] = this.placeService.getListOfCounties();
  types: string[] = this.getListOfTypes();

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    /*this.getPlacesList(); TODO : check if necessary, but it seems not. Everything works fine without it */
  }

  getListOfTypes(): string[] {
    const listOfTypes: string[] = [this.places[0].type];
    for (const p of this.places) {
      listOfTypes.push(p.type);
    }
    const distinctTypes = [...new Set(listOfTypes)];
    return distinctTypes;
  }

  getListOfCounties(): string[] {
    const listOfCounties: string[] = [this.places[0].county];
    for (const p of this.places) {
      listOfCounties.push(p.county);
    }
    const distinctCounties = [...new Set(listOfCounties)];
    return distinctCounties;
  }

  /*
  // TODO : check if necessary, but it seems not. Everything works fine without it
  getPlacesList(): Place[] {
    return this.placeService.getPlaces();
  }*/

}
