import { Component, OnInit } from '@angular/core';
import {User} from '../_models';
import {ApiService, MessageService} from '../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  user: User = new User();

  constructor(private apiService: ApiService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  onSignup() {
    this.apiService.postRequest('users', {user: this.user}).subscribe(
      data => {
        // @ts-ignore
        localStorage.setItem('token', data.user.data.token);
        this.router.navigate(['/home']);
      },
      error => {
        let err;
        err = error.error.errors ? error.error.errors.error[0] : error.error.user.error;
        this.messageService.showMessage(
          'error',
          `Sign up failed: ${err}`
        );
      });
  }

}
