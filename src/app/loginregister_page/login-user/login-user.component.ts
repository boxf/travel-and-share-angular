import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmitLogin(form: NgForm) {
    const loginForm = new FormData();
    loginForm.append('email', form.value.email);
    loginForm.append('password', form.value.password);
    this.userService.submitUser(loginForm);
    this.router.navigate(['/home']);
  }

}
