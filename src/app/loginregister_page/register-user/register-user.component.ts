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
userForm: FormGroup;
user = new User();



  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {

  }
  /** onSubmitForm when the form is submitted, the values entered in the fields are stored in a new user.
   * This new user is then sent to the @see userService in charge of sending this new user to the back end.
   */
  onSubmitForm() {
    const userForm = new FormData();
    userForm.append('lastName', this.user.lastName);
    userForm.append('firstName', this.user.firstName);
    userForm.append('email', this.user.email);
    userForm.append('password', this.user.password);
    this.userService.createUser(userForm);
    this.router.navigate(['/home']).then(r => console.log(r));
  }
  /** ngOnInit initializes the form to register a new @see user.
   * A set of validators are provided to disable the form submission until the form is properly filled in.
   */
  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email], this.checkEmailValidator.bind(this)],
      password: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  /** checkEmailValidator creates a validator that is going to check if the email entered in the registration form already exists,
   * in the database.
   */
  checkEmailValidator(control: AbstractControl) {
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
