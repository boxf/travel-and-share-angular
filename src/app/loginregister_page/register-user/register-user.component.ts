import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {UserImpl} from '../../user-impl';
import {UserService} from '../../services/user-service/userService';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
userForm: FormGroup;


  constructor(private formBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group(
      {
        lastName: ['', Validators.required],
        firstName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('?=.*[0-9]')]]
      }
    );
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new UserImpl(
      formValue['lastName'],
      formValue['firstName'],
      formValue['email'],
      formValue['password']
    );
    this.userService.addUser(newUser);

  }



}
