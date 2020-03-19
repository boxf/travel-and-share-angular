import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../place';
import {PlaceService} from '../../services/place-service/place.service';
import {Route} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-place-summary',
  templateUrl: './place-summary.component.html',
  styleUrls: ['./place-summary.component.css']
})
export class PlaceSummaryComponent implements OnInit {
  @Input() place: Place;
  places: Observable<Place[]> = this.placeService.getPlacesByCounty();
  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
  }

}
