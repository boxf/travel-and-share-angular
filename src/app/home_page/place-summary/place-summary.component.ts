import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../place';
import {PlaceService} from '../../services/place-service/place.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-place-summary',
  templateUrl: './place-summary.component.html',
  styleUrls: ['./place-summary.component.css']
})
export class PlaceSummaryComponent implements OnInit {
  @Input() place: Place;
  places: Place[] = this.placeService.getPlacesByCounty();
  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
  }

}
