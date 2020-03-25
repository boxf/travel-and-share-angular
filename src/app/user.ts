import {Place} from './place';

export class User {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  listPlaces: Place[];
}
