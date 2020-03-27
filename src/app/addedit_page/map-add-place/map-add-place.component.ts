import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {LayerGroup, Marker} from 'leaflet';


@Component({
  selector: 'app-map-add-place',
  templateUrl: './map-add-place.component.html',
  styleUrls: ['./map-add-place.component.css']
})
export class MapAddPlaceComponent implements OnInit {
  lat: number;
  lon: number;
  map;

  @Output() latEvent = new EventEmitter<number>();
  @Output() lonEven = new EventEmitter<number>();

  constructor() {}

  /**
   * Method to send the longitude of marker
   * @see ngOnInit
   * @author Dambrine François
   */
  sendLon() {
    this.lonEven.emit(this.lon);
  }

  /**
   * Method to send the latitude of marker
   * @see ngOnInit
   * @author Dambrine François
   */
  sendLat() {
    this.latEvent.emit(this.lat);
  }


  ngOnInit() {
    this.map = L.map('addmap').setView([47.5, 3], 5.5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,  ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/satellite-v9',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicmFtaWhhcm1hbmQiLCJhIjoiY2s3cDlvOWRxMDR1dTNmc3Z5a3l3NnV1cSJ9.R9t0CenlY9cz4sgmqvqFSw'
    }).addTo(this.map);
    let theMarker = {};
    this.map.on('click', (e) => {
      this.lat = e.latlng.lat;
      this.lon = e.latlng.lng;
      this.sendLat();
      this.sendLon();
      if (theMarker != null) {
        this.map.removeLayer(theMarker);
      }
      theMarker = L.marker([this.lat, this.lon]).addTo(this.map);
    });
  }


}
