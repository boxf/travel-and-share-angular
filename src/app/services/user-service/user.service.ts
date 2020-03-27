import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  private userRESTUrl = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) {
  }

  /** createUser sends the new user to Spring Rest Controller. A "User successfully added" message is written in the console
   * upon completion, else the error is displayed.
   * @param userForm contains all the information to create a new user.
   */
  createUser(userForm: FormData) {
    return this.http.post(this.userRESTUrl + 'user', userForm).subscribe(() => {
      console.log('User successfully added');
    },
      error => {
        console.log('An error occured: ' + error);
      });
  }

  /** getEmailFromServer adds the email to compare to the url.
   * @param email contains the email that will be compared to the data base.
   */
  getEmailFromServer(email: string) {
    return this.http.get(this.userRESTUrl + 'validateEmail/' + email);
  }
}
