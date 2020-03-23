import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../place';
import {TypeEnum} from '../../TypeEnum';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {PlaceImpl} from '../../place-impl';
import {CountyEnum} from '../../CountyEnum';
import {PlaceService} from '../../services/place-service/place.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  place = new PlaceImpl();
  maxChars = 500;
  role = '';
  selectedTypeEnum = TypeEnum;
  public typeEnumOption = [];
  selectedCountyEnum = CountyEnum;
  public countyEnumOption = [];
  placeForm: FormGroup;


  constructor(private fB: FormBuilder, private router: Router, private placeService: PlaceService) {
    this.countyEnumOption = this.placeService.getCountiesKeys();
    this.typeEnumOption = this.placeService.getTypesKeys();
  }

  onSubmit() {
    this.placeService.createPlace(this.place).subscribe(
      value => {
        console.log(value);
      });
  }

  ngOnInit(): void {
    this.placeForm = this.fB.group({
      name: ['', Validators.required],
      xaxis: ['', Validators.required],
      yaxis: ['', Validators.required],
      type: '',
      county: '',
      review: ['', Validators.required],
      picture: ''
    });
  }
}
