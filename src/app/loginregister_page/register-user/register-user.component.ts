import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
// user: UserComponent;
userForm: FormGroup;
user = new User();



  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {

  }
  onSubmitForm() {
    const userForm = new FormData();
    userForm.append('lastName', this.user.lastName);
    userForm.append('firstName', this.user.firstName);
    userForm.append('email', this.user.email);
    userForm.append('password', this.user.password);
    this.userService.createUser(userForm);
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email], this.checkEmailValidator.bind(this)],
      password: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  checkEmailValidator(control: AbstractControl) {
    console.log('In Validator');
    return this.userService.getEmailFromServer(control.value).pipe(map(res => {
      return res ? { emailTaken: true} : null;
      }
    ));
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get firstName() {
    return this.userForm.get('firstName');
  }
}
