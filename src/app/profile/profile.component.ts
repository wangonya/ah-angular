import { Component, OnInit } from '@angular/core';
import {ApiService} from '../_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  profile;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRequest(`profiles/${localStorage.getItem('user')}/`).subscribe(
      data => this.profile = data['profiles'],
      error => console.log('Error fetching profile', error));
  }

}
