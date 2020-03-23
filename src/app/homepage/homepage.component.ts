import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Place} from '../place';
import {PlaceService} from '../services/place-service/place.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  selectedCounty: string;
  selectedType: string;
  selectedGrade: number;
  ListOfPlacesSelected: Observable<Place[]>;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    // this.ListOfPlacesSelected = this.placeService.;
  }


}
