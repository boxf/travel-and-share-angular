import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../place';
import {TypeEnum} from '../../TypeEnum';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  place: Place;
  maxChars = 500;
  role = '';
  private selectedTypeEnum: TypeEnum;
  typeEnum: TypeEnum[];
  constructor() {}

  ngOnInit(): void {
  }

}
