/** When a user is created, the email can't already exist in the data base */
import {AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Injectable} from '@angular/core';
import {UserService} from './services/user-service/user.service';
import {Observable, of, timer} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

// export function CheckEmailValidator(isExist: boolean): AsyncValidatorFn {
//     console.log('In validator')
//     return this.userService.getEmailFromServer(control.value).pipe(
//       map(isExist => {
//         if (isExist === true) {
//           console.log('email: ' + isExist);
//           return 'true';
//         } else {
//           console.log('email: ' + isExist);
//           return null;
//         }
//       } ),
//       catchError(() => of (null))
//     )
//       ;
//
// }
