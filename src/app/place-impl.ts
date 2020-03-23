import {Place} from './place';
import {TypeEnum} from './TypeEnum';
import {CountyEnum} from './CountyEnum';

export class PlaceImpl implements Place {
  county: string;
  grade: number;
  id: number;
  type: string;
  pictureName: string;
  xaxis: number;
  yaxis: number;
  userReview: string;
  name: string;
}
