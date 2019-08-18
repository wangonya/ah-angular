import { Component, OnInit } from '@angular/core';
import {User} from '../_models';
import {ApiService, MessageService} from '../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {
  user: User = new User();

  constructor(private apiService: ApiService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  onLogin() {
    this.apiService.postRequest('users/login', {user: this.user}).subscribe(
      data => {
        // @ts-ignore
        localStorage.setItem('token', data.user.token);
        this.router.navigate(['/home']);
      },
      error => {
        this.messageService.showMessage(
          'error',
          'Log in failed. Please check your credentials and try again.'
        );
      });
  }

}
