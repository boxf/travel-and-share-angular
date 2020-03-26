import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
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

  getEmailFromServer(email: string) {
    return this.http.get(this.userRESTUrl + 'validateEmail/' + email);
  }

  submitUser(loginForm: FormData) {
    return this.http.post(this.userRESTUrl + 'login', loginForm);
  }


}
