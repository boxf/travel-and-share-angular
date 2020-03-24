import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Place} from '../../place';
import {flatMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {PlaceService} from '../../services/place-service/place.service';
import {LayerGroup, Marker} from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  places: Place[] = [];
  countySubscription: Subscription;
  homeMap;
  markersGroup: LayerGroup;
  markers: Marker[] = []


  constructor(private placeService: PlaceService) {
  }

  ngOnInit() {
    this.addMapWithList();
    console.log('map added !');
    this.countySubscription = this.placeService
      .getSelectedCounty()
      .pipe(
        flatMap(selectedCounty => {
          return this.placeService.getPlacesByCounty(selectedCounty);
        })
      )
      .subscribe(places => {
          this.places = places;
          this.updateMarkers();
        },
        error => console.log(error));
  }

  addMapWithList(): void {
    this.homeMap = L.map('map').setView([47.5, 3], 5.5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,  ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/satellite-v9',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicmFtaWhhcm1hbmQiLCJhIjoiY2s3cDlvOWRxMDR1dTNmc3Z5a3l3NnV1cSJ9.R9t0CenlY9cz4sgmqvqFSw'
    }).addTo(this.homeMap);
    const myscale = L.control.scale().addTo(this.homeMap);
    this.markersGroup = L.layerGroup().addTo(this.homeMap);
  }

  updateMarkers(): void {

    this.deleteMarkers();
    this.markers = []
    console.log('length of markers list : ' + this.markersGroup);
    for (const place of this.places) {
      console.log('place :' + place.name);
      const placeXaxis = place.xaxis;
      const placeYaxis = place.yaxis;
      const placeName = place.name;
      const placeCounty = place.county;
      const currentMarker = L.marker([placeXaxis, placeYaxis]);
      currentMarker.addTo(this.markersGroup).bindPopup('This is the place ' + placeName
        + ', located in ' + placeCounty);
      this.markers.push(currentMarker);
    }
   var autozoom = L.featureGroup(this.markers);
    this.homeMap.fitBounds(autozoom.getBounds());
  }

  deleteMarkers(): void {
    this.markersGroup.clearLayers();

  }

}
