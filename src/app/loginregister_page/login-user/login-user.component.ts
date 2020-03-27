import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication-service/authentication.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loading = false;
  submitted = false;

  constructor(private userService: UserService, private router: Router,
              private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']).then(() => console.log('success'));
    }
  }

  ngOnInit(): void {
  }

  /** onSubmitLogin receives the log in form and passes it to the authentication service.
   * @param form contains the log in information: email and password
   */
  onSubmitLogin(form: NgForm) {
    this.submitted = true;
    this.loading = true;
    const loginForm = new FormData();
    loginForm.append('email', form.value.email);
    loginForm.append('password', form.value.password);
    this.authenticationService.submitUser(loginForm);
  }

}
