import { Component, OnInit } from '@angular/core';
import { ApiService, MessageService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  articles;

  constructor(private apiService: ApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.apiService.request('get', 'articles/feed/').subscribe(
      data => this.articles = data['results'],
      error => console.log('Error fetching articles', error));
  }
}
