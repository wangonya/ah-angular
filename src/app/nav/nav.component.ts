import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  tokenExists: string = localStorage.getItem('token');

  constructor() { }

  ngOnInit() {
  }

  logOut() {
    localStorage.clear();
    window.location.replace('/signin');
  }

}
