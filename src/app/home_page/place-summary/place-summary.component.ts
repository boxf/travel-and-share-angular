import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../place';
import {PlaceService} from '../../services/place-service/place.service';

@Component({
  selector: 'app-place-summary',
  templateUrl: './place-summary.component.html',
  styleUrls: ['./place-summary.component.css']
})
export class PlaceSummaryComponent implements OnInit {

  @Input() place: Place;
  places: Place [] = [] ;
  constructor() { }

  ngOnInit(): void {
  }

}
