import { Component, OnInit } from '@angular/core';
import { ApiService, MessageService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  articles;
  defaultImg = 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png';

  constructor(private apiService: ApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.apiService.getArticles().subscribe((data) => {
      this.messageService.createMessage('success', 'Success');
      this.articles = data['results'];
      console.log(this.articles);
    });
  }
}
