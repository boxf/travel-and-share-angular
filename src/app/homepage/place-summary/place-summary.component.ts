import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../place';

@Component({
  selector: 'app-place-summary',
  templateUrl: './place-summary.component.html',
  styleUrls: ['./place-summary.component.css']
})
export class PlaceSummaryComponent implements OnInit {

  @Input() place: Place;

  constructor() { }

  ngOnInit(): void {
  }

}
