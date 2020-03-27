import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

/** The authentication class is responsible for the communication with Spring security. */
@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private userRESTUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private router: Router) {
    this.currentSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentSubject.value;
  }

  /** submitUser is the method that sends the login form to Spring security.
   * @param loginForm contains the email and password.
   * @return http fetches the http response and redirect to the home page if the response is http 200 else does nothing.
   */
  submitUser(loginForm: FormData) {
    console.log('submit');
    return this.http.post<string[]>(this.userRESTUrl + 'login', loginForm).subscribe(
      () => {
        console.log('Login successfull');
        this.router.navigate(['/home']).then(() => console.log('success'));
      },
      (error) => {
        console.log('You failed!! ' + error);
      }
    );
  }
}
