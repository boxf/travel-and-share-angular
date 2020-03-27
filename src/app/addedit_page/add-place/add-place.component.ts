import {Component, Input, OnInit} from '@angular/core';
import {TypeEnum} from '../../TypeEnum';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {PlaceImpl} from '../../place-impl';
import {CountyEnum} from '../../CountyEnum';
import {PlaceService} from '../../services/place-service/place.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  selectedFile: File;
  lat = "";
  lon = "";

  constructor(private http: HttpClient, private fB: FormBuilder, private router: Router, private placeService: PlaceService) {
    this.countyEnumOption = Object.keys(this.selectedCountyEnum).filter(k => typeof CountyEnum[k as any] === 'string');
    this.typeEnumOption = Object.keys(this.selectedTypeEnum).filter(k => typeof TypeEnum[k as any] === 'string');
  }

  onSubmit() {
    const placeForm = new FormData();
    if (this.selectedFile != null) {
      placeForm.append('pictureFile', this.selectedFile, this.selectedFile.name);
    }
    placeForm.append('name', this.place.name);
    placeForm.append('xaxis', JSON.stringify(this.place.xaxis));
    placeForm.append('yaxis', JSON.stringify(this.place.yaxis));
    placeForm.append('description', this.place.description);
    placeForm.append('type', this.place.type);
    placeForm.append('county', this.place.county);
    this.placeService.createPlace(placeForm);
    if (this.selectedFile != null) {
      const uploadImageData = new FormData();
      uploadImageData.append('MyFile', this.selectedFile, this.selectedFile.name);
      this.placeService.uploadPicture(uploadImageData);
      this.selectedFile = null;
    }
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  /**
   * Method to receive the latitude from a other component
   * @see map-add-place.component
   * @param $event
   * @author Dambrine François
   */
  receiveLat($event){
    this.lat = $event;
  }

  /**
   * Method to receive the longitude from a other component
   * @see map-add-place.component
   * @param $event
   * @author Dambrine François
   */
  receiveLon($event){
    this.lon = $event;
  }

  ngOnInit(): void {
    this.placeForm = this.fB.group({
      name: ['', Validators.required],
      xaxis: ['', Validators.required],
      yaxis: ['', Validators.required],
      type: ['', Validators.required],
      county: ['', Validators.required],
      description: ['', Validators.required],
      picture: ''
    });
  }
}
