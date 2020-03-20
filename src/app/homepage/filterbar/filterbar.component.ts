import {Component, Input, OnInit, OnChanges, Output, SimpleChanges} from '@angular/core';
import { PlaceService } from '../../services/place-service/place.service';
import { Place } from '../../place';
import { Observable } from 'rxjs';
import {PLACES} from '../../some-places';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit, OnChanges {

  places: Place[] = PLACES ;
  counties: string[] = this.placeService.getListOfCounties();
  types: string[] = this.placeService.getListOfTypes();
  @Input() selectedCounty: string;
  serviceCounty: string = this.placeService.selectedCounty;

  constructor(private placeService: PlaceService) {
  }

  ngOnInit(): void {  }

  ngOnChanges(changes: SimpleChanges): void {
    this.placeService.selectCounty(this.selectedCounty);
    this.placeService.updatePlacesList();
  }

  /*private getListOfPlaces() {
    this.places = this.placeService.getPlacesByCounty().subscribe(place => {
      this.places = place as Place[]
    });

  }*/

  /*getListOfCounties(): string[] {
    const listOfCounties: string[] = [this.places[0].county];
    for (const p of this.places) {
      listOfCounties.push(p.county);
    }
    const distinctCounties = [...new Set(listOfCounties)];
    return distinctCounties;
  }*/


  /*// TODO : check if necessary, but it seems not. Everything works fine without it
    getPlacesList(): Place[] {
      return this.placeService.getPlacesTest();
    }*/

}
