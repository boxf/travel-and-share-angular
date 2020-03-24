import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {PlaceImpl} from "../../place-impl";
import {PLACES} from "../../some-places";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
places = PLACES;
  constructor() { }

  ngOnInit() {

    const map = L.map('map').setView([45.01, 6.1], 6);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,  ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/satellite-v9',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicmFtaWhhcm1hbmQiLCJhIjoiY2s3cDlvOWRxMDR1dTNmc3Z5a3l3NnV1cSJ9.R9t0CenlY9cz4sgmqvqFSw'
    }).addTo(map);
    for (const value of this.places) {
      const placeXaxis = value.xaxis;
      const placeYaxis = value.yaxis
      const placeName = value.name;
      const placeCounty = value.county;
      const placesMarkers = L.marker([placeXaxis, placeYaxis]).addTo(map).bindPopup('This is the place ' + placeName + ', located in ' + placeCounty);
    }
  }

}
