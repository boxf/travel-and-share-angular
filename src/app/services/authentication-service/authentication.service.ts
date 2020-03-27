import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthenticationService implements CanActivate{
  private currentSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private userRESTUrl = 'http://localhost:8080/api/';
  authenticated = false;

  constructor(private http: HttpClient, private router: Router) {
    this.currentSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentSubject.value;
  }

  /** Store user details and jwt token in local storage to keep user logged in while his navigates pages */
  submitUser(loginForm: FormData) {
    console.log('submit');
    return this.http.post<string[]>(this.userRESTUrl + 'login', loginForm).subscribe(
      () => {
        console.log('Login successfull');
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log('You failed!! ' + error);
      }
    );
  }
  // isAuthenticated() {
  //   const token = localStorage.getItem('access_token');
  //   if (token) {
  //     return true;
  //   }
  //   return false;
  // }
  // // tslint:disable-next-line:max-line-length
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (this.isAuthenticated()){
  //     return true;
  //   }
  //   this.router.navigate(['/home']);
  //   return false;
  // }
}
