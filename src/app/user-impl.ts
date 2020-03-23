import {User} from './user';
import {Place} from './place';

export class UserImpl implements User {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  listPlaces: Place[];
  password: string;
}
