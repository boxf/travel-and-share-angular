import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../../user';
import {UserComponent} from '../../user/user.component';
@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) {
  }
  saveUserToServer(user: UserComponent) {
    return this.http.put(this.baseUrl + 'user.json', user);
  }
  fetchUserFromServer() {}
  fetchEmailFromServer() {}
}
