import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() id: number;
  @Input() lastName: string;
  @Input() firstName: string;
  @Input() email: string;
  @Input() password: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
