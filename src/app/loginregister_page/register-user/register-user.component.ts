import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {Router} from '@angular/router';
import {UserComponent} from '../../user/user.component';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
user: UserComponent;


  constructor(private userService: UserService, private router: Router) {

  }
  onSubmitForm(form: NgForm) {
    const userForm = new FormData();
    userForm.append('lastName', form.value.lastName);
    userForm.append('firstName', form.value.firstName);
    userForm.append('email', form.value.email);
    userForm.append('password', form.value.password);
    this.userService.createUser(userForm);
    this.router.navigate(['/home']);
  }
  IsEmailPresent(email: string) {
    let present = false;
    if (this.userService.getUserByEmailFromServer(email) != null) {
      present = true;
    }
    return present;
  }
}
