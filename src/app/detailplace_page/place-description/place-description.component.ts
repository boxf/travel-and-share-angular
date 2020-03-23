import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../place';
import {PlaceService} from '../../services/place-service/place.service';
import {ActivatedRoute, Route} from '@angular/router';
import {find, flatMap, map} from 'rxjs/operators';
import {PlaceImpl} from '../../place-impl';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-place-description',
  templateUrl: './place-description.component.html',
  styleUrls: ['./place-description.component.css']
})
export class PlaceDescriptionComponent implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
  ) { }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getPlaceById(id).subscribe(place => {
        this.place = place;
      },
      error =>  console.log(error));
  }
}

