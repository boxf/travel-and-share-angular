import {Place} from './place';

export interface User {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  listPlaces: Place[];
}
