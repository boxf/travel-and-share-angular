import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../../user';
import {UserComponent} from '../../user/user.component';
import {Observable} from 'rxjs';
@Injectable()
export class UserService {
  private userRESTUrl = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) {
  }
  createUser(userForm: FormData) {
    return this.http.post(this.userRESTUrl + 'user', userForm).subscribe(value => {
      console.log(value);
    });
  }
  fetchUserFromServer() {}
  getUserByEmailFromServer(email: string): Observable<User> {
    return this.http.get<User>(this.userRESTUrl + 'users/' + email);
  }
}
