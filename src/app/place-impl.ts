import {Place} from './place';
import {CountyEnum} from './CountyEnum';
import {TypeEnum} from './TypeEnum';

export class PlaceImpl implements Place {
  county: string;
  grade: number;
  id: number;
  type: string;
  pictureName: string;
  xaxis: number;
  yaxis: number;
  description: string;
  name: string;
}
