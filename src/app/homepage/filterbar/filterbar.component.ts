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
export class FilterbarComponent implements OnInit {

  places: Place[];
  counties: string[] = this.placeService.getListOfCounties();
  types: string[] = this.placeService.getListOfTypes();
  selectedCounty = '';

  constructor(private placeService: PlaceService) {
  }

  ngOnInit(): void {
  }

  sendSelectedCounty(): void {
    this.placeService.sendSelectedCounty(this.selectedCounty);
  }
}
