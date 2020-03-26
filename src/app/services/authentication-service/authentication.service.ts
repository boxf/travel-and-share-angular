import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private userRESTUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
    this.currentSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentSubject.value;
  }

  /** Store user details and jwt token in local storage to keep user logged in while his navigates pages */
  submitUser(loginForm: FormData) {
    return this.http.post(this.userRESTUrl + 'login', loginForm)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentSubject.next(user);
        return user;
      }));
  }
}
