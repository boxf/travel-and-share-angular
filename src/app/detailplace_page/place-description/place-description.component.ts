import { Component, OnInit } from '@angular/core';
import {Place} from '../../place';
import {PlaceService} from '../../services/place-service/place.service';

@Component({
  selector: 'app-place-description',
  templateUrl: './place-description.component.html',
  styleUrls: ['./place-description.component.css']
})
export class PlaceDescriptionComponent implements OnInit {
  selectedPlace: Place;
  places: Place[];
  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
  }

  getPlaceById() {
    this.placeService.getPlaces();
    this.placeService.getPlaceByFind(this.selectedPlace.id);
  }
}
