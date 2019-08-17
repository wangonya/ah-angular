import { Component, OnInit } from '@angular/core';
import {User} from '../_models';
import {ApiService} from '../_services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {
  user: User = new User();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onLogin() {
    this.apiService.postRequest('users/login', {user: this.user}).subscribe(
      data => console.log(data),
      error => console.log('Error logging in', error.message));
  }

}
