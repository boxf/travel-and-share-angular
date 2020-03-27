import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  /** Store user details and jwt token in local storage to keep user logged in while he navigates pages */
  submitUser(username, password) {
    console.log(username + ' ' + password);
    return this.http.post<string[]>(this.userRESTUrl + 'login', {username, password});
  }
}
