import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place-service/place.service';
import { Place } from '../../place';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {

  places: Place[];
  counties: string[] = this.placeService.getCountiesValues();
  types: string[] = this.placeService.getTypesValues();
  selectedCounty = 'AIN_01';
  selectedType = 'BEACH';
  selectedGrade = '&#9734; &#9734; &#9734; &#9734; &#9734;';

  constructor(private placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.sendSelectedCounty();
  }

  sendSelectedCounty(): void {
    this.placeService.sendSelectedCounty(this.selectedCounty);
    this.placeService.sendSelectedType(this.selectedType);
    this.placeService.sendSelectedGrade(this.selectedGrade);
  }
  /*sendSelectedType(): void {

  }

  sendSelectedGrade() {

  }*/
}
