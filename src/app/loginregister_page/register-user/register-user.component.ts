import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {Router} from '@angular/router';
import {UserComponent} from '../../user/user.component';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
user: UserComponent;

  constructor(private userService: UserService, private router: Router) {

  }
  onSubmitForm() {
    // this.userService.saveUserToServer(this.user).subscribe(result => this.gotoMainPage());
  }
  // gotoMainPage() {
  //   this.router.navigate(['']);
  // }



}
