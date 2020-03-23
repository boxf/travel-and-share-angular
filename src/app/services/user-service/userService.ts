import {UserImpl} from '../../user-impl';

export class UserService {
  private baseUrl = 'http://localhost:8080/api/';

  addUser(user: UserImpl) {
    return this.http.post<UserImpl>(this.baseUrl + 'user', user);
  }

}
